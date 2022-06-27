import { Account } from '../account/account.types';
import { Category } from '../category/category.types';

export interface Transaction {
  id: string;
  accountId: string;
  account?: Account;
  categoryId: string | null;
  category?: Category | null;
  reference: string | null;
  amount: number;
  currency: string;
  date: Date;
}
