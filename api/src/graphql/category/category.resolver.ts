import { HasId } from '../../common/has-id';
import { categories } from '../../data';
import { Category } from './category.types';

export const categoryResolvers = {
  Query: {
    categories: (): Category[] => categories,
    category: (_parent: Category, { id }: HasId): Category | undefined => {
      return categories.find((category: Category) => category.id === id);
    },
  },
};
