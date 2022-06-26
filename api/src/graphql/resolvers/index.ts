import { accountResolvers } from '../account/account.resolver';
import { categoryResolvers } from '../category/category.resolver';
import { transactionResolvers } from '../transaction/transaction.resolver';

const rootResolver = {};

export const graphqlResolvers = [
  rootResolver,
  accountResolvers,
  categoryResolvers,
  transactionResolvers,
];
