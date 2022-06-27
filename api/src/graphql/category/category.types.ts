import { Transaction } from '../transaction/transaction.types';

export interface Category {
  id: string;
  name: string;
  color: string | null;
  transactions?: Transaction[];
}
