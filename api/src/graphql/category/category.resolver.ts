import { PrismaClient } from '@prisma/client';
import { PaginationArgs } from '../../common/pagination-args';
import { HasId } from '../../common/has-id';
import { Category } from './category.types';

const prisma = new PrismaClient();

export const categoryResolvers = {
  Query: {
    findAllCategories: ({
      skip,
      take,
    }: PaginationArgs): Promise<Category[]> => {
      return prisma.category.findMany({ skip, take });
    },
    findUniqueCategoryById: (
      _parent: Category,
      { id }: HasId
    ): Promise<Category | null> => {
      return prisma.category.findUnique({
        where: {
          id,
        },
      });
    },
  },
};
