import { HasId } from '../../common/has-id';
import { transactions } from '../../data';
import { Transaction } from './transaction.types';

export const transactionResolvers = {
  Query: {
    transactions: (): Transaction[] => transactions,
    transaction: (
      _parent: Transaction,
      { id }: HasId
    ): Transaction | undefined => {
      return transactions.find(
        (transaction: Transaction) => transaction.id === id
      );
    },
  },
};
