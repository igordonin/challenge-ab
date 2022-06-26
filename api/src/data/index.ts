import { Account } from '../graphql/account/account.types';
import { Category } from '../graphql/category/category.types';
import { Transaction } from '../graphql/transaction/transaction.types';

export const accounts: Account[] = [
  {
    id: 'account1',
    name: 'account1',
  },
  {
    id: 'account2',
    name: 'account2',
  },
];

export const categories: Category[] = [
  {
    id: 'category1',
    name: 'category1',
  },
  {
    id: 'category2',
    name: 'category2',
  },
];

export const transactions: Transaction[] = [
  {
    id: 'transaction1',
    accountId: accounts[0].id,
    account: accounts[0],
    amount: 10,
    currency: 'BRL',
    date: new Date().toUTCString(),
  },
  {
    id: 'transaction2',
    accountId: accounts[1].id,
    account: accounts[1],
    amount: 20,
    currency: 'USD',
    date: new Date().toUTCString(),
  },
];
