import { PrismaClient } from '@prisma/client';
import { HasId } from '../../common/has-id';
import { Account } from './account.types';

const prisma = new PrismaClient();

export const accountResolvers = {
  Query: {
    findAllAccounts: (_parent: Account): Promise<Account[]> => {
      return prisma.account.findMany();
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
