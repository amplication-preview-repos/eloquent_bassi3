import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type IngredientUpdateInput = {
  name?: string | null;
  quantity?: number | null;
  recipe?: RecipeWhereUniqueInput | null;
};
