import { Transaction } from '../transaction/transaction.types';

export interface Account {
  id: String;
  name: String;
  transactions?: Transaction[];
}
