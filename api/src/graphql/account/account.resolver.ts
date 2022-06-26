import { HasId } from '../../common/has-id';
import { accounts } from '../../data';
import { Account } from './account.types';

export const accountResolvers = {
  Query: {
    accounts: (): Account[] => accounts,
    account: (_parent: Account, { id }: HasId): Account | undefined => {
      return accounts.find((account: Account) => account.id === id);
    },
  },
};
