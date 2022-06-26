import { Transaction } from '../transaction/transaction.types';

export interface Category {
  id: String;
  name: String;
  color?: String;
  transactions?: Transaction[];
}
