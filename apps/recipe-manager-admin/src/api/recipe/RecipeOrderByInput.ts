import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  instructions?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
