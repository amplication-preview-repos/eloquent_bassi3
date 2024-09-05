import { SortOrder } from "../../util/SortOrder";

export type IngredientOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  recipeId?: SortOrder;
  updatedAt?: SortOrder;
};
