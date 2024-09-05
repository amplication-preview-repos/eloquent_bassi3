import { RecipeUpdateManyWithoutCategoriesInput } from "./RecipeUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  recipes?: RecipeUpdateManyWithoutCategoriesInput;
};
