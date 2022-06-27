import { PrismaClient } from '@prisma/client';
import { PaginationArgs } from '../../common/pagination-args';
import { HasId } from '../../common/has-id';
import { Transaction } from './transaction.types';

const prisma = new PrismaClient();

export const transactionResolvers = {
  Query: {
    findAllTransactions: (
      skip: number,
      take: number
    ): Promise<Transaction[]> => {
      return prisma.transaction.findMany({ skip, take });
    },
    findUniqueTransactionById: (
      _parent: Transaction,
      { id }: HasId
    ): Promise<Transaction | null> => {
      return prisma.transaction.findUnique({
        where: {
          id,
        },
      });
    },
  },
};
