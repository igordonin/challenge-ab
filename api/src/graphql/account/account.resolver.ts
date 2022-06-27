import { PrismaClient } from '@prisma/client';
import { PaginationArgs } from '../../common/pagination-args';
import { HasId } from '../../common/has-id';
import { Account } from './account.types';

const prisma = new PrismaClient();

export const accountResolvers = {
  Query: {
    findAllAccounts: (
      _parent: Account,
      { skip, take }: PaginationArgs
    ): Promise<Account[]> => {
      return prisma.account.findMany({ skip, take });
    },
    findUniqueAccountById: (
      _parent: Account,
      { id }: HasId
    ): Promise<Account | null> => {
      return prisma.account.findUnique({
        where: {
          id,
        },
      });
    },
  },
};
