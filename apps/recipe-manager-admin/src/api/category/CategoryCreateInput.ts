import { RecipeCreateNestedManyWithoutCategoriesInput } from "./RecipeCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  recipes?: RecipeCreateNestedManyWithoutCategoriesInput;
};
