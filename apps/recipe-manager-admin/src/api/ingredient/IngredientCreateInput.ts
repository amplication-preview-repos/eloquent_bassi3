import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type IngredientCreateInput = {
  name?: string | null;
  quantity?: number | null;
  recipe?: RecipeWhereUniqueInput | null;
};
