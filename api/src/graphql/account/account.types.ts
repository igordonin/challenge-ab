import { Transaction } from '../transaction/transaction.types';

export interface Account {
  id: string;
  name: string;
  transactions?: Transaction[];
}
