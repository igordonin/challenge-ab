import { Account, Category, PrismaClient, Transaction } from '@prisma/client';
import fs from 'fs';
import csv from 'csvtojson';

interface TransactionCsv {
  id: string;
  accountId: string;
  categoryId: string;
  reference: string | null;
  amount: string;
  currency: string;
  date: string;
}

const convert = (transactionCsv: TransactionCsv): Transaction => {
  const {
    id,
    accountId,
    categoryId,
    currency,
    reference,
    amount,
    date,
  } = transactionCsv;

  return {
    id,
    accountId,
    categoryId: !!categoryId ? categoryId : null,
    currency,
    reference,
    amount: parseFloat(amount),
    date: new Date(date),
  };
};

const executeTransactionsMigration = (prisma: PrismaClient) => {
  const csvFilePath = './prisma/migrations-data/transactions.csv';

  const batchsMap: { [index: number]: Transaction[] } = {};
  const batchSize = 20000;
  let batchIndex = 0;
  let counter = 0;

  csv()
    .fromStream(fs.createReadStream(csvFilePath))
    .subscribe(
      (transactionCsv: TransactionCsv) => {
        if (counter === batchSize - 1) {
          counter = 0;
          batchIndex++;
        }
        batchsMap[batchIndex] = batchsMap[batchIndex] || [];

        const transaction = convert(transactionCsv);

        batchsMap[batchIndex].push(transaction);
        counter++;
      },
      (err) =>
        console.error(`Error reading event from Transactions the stream`, {
          err,
        }),
      async () => {
        const batchs = Object.values(batchsMap);
        for (let i = 0; i < batchs.length; i++) {
          await prisma.transaction.createMany({ data: batchs[i] });
        }
        await prisma.$disconnect();
        process.exit(0);
      }
    );
};

const executeAccountsMigration = (prisma: PrismaClient) => {
  const csvFilePath = './prisma/migrations-data/accounts.csv';
  const accounts: Account[] = [];

  csv()
    .fromStream(fs.createReadStream(csvFilePath))
    .subscribe(
      (account: Account) => {
        accounts.push(account);
      },
      (err) =>
        console.error(`Error reading event from Accounts the stream`, {
          err,
        }),
      async () => {
        await prisma.account.createMany({ data: accounts });
        executeTransactionsMigration(prisma);
      }
    );
};

interface CategoryCsv {
  id: string;
  name: string;
  color: string;
}

const executeCategoriesMigration = (prisma: PrismaClient) => {
  const csvFilePath = './prisma/migrations-data/categories.csv';
  const categories: Category[] = [];

  csv()
    .fromStream(fs.createReadStream(csvFilePath))
    .subscribe(
      (categoryCsv: CategoryCsv) => {
        const category: Category = {
          id: categoryCsv.id,
          name: categoryCsv.name,
          color: !!categoryCsv.color ? categoryCsv.color : null,
        };

        categories.push(category);
      },
      (err) =>
        console.error(`Error reading event from Categories the stream`, {
          err,
        }),
      async () => {
        await prisma.category.createMany({ data: categories });
        executeAccountsMigration(prisma);
      }
    );
};

async function main() {
  const prisma = new PrismaClient();
  executeCategoriesMigration(prisma);
}

main().catch(async (e) => {
  console.error(e);
  process.exit(1);
});
