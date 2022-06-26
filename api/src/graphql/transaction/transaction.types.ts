import { Account } from '../account/account.types';
import { Category } from '../category/category.types';

export interface Transaction {
  id: String;
  accountId: String;
  account: Account;
  categoryId?: String;
  category?: Category;
  reference?: String;
  amount: Number;
  currency: String;
  date: Date;
}
