import { Max, Min } from 'class-validator';

export class PaginationArgs {
  @Min(0)
  skip: number;

  @Min(0)
  @Max(50)
  take: number;
}
