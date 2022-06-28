import { PrismaClient } from '@prisma/client';
import { PaginationArgs } from 'src/common/pagination-args';
import { HasId } from '../../common/has-id';
import { Transaction } from './transaction.types';
import { endOfMonth, isAfter } from 'date-fns';

const prisma = new PrismaClient();

const convertYearMonthToDate = (yearMonth: string): Date => {
  const parts = yearMonth.split('-');

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;

  return new Date(year, month, 1);
};

const validateDates = (startDate: Date, endDate: Date) => {
  if (isAfter(startDate, endDate)) {
    throw new Error('Start date must be before end date');
  }
};

interface TransactionSearchArgs extends PaginationArgs {
  accountId: string;
  startDate: string;
  endDate: string;
}

interface WhereFilter {
  accountId?: string;
  date?: {
    lte?: Date;
    gte?: Date;
  };
}

export const transactionResolvers = {
  Query: {
    findAllTransactions: (
      _parent: Transaction,
      {
        skip,
        take,
        accountId,
        startDate: startMonthYear,
        endDate: endMonthYear,
      }: TransactionSearchArgs
    ): Promise<Transaction[]> => {
      let where: WhereFilter = {};

      if (accountId) {
        where = {
          ...where,
          accountId,
        };
      }

      if (startMonthYear) {
        const startDate = convertYearMonthToDate(startMonthYear);

        where = {
          ...where,
          date: {
            gte: startDate,
          },
        };
      }

      if (endMonthYear) {
        const endDate = convertYearMonthToDate(endMonthYear);

        where = {
          ...where,
          date: {
            ...where.date,
            lte: endOfMonth(endDate),
          },
        };
      }

      if (where.date && where.date.lte && where.date.gte) {
        validateDates(where.date.gte, where.date.lte);
      }

      return prisma.transaction.findMany({
        where,
        skip,
        take,
        include: {
          category: true,
          account: true,
        },
      });
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
