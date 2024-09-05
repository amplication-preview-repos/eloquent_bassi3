import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { IngredientCreateNestedManyWithoutRecipesInput } from "./IngredientCreateNestedManyWithoutRecipesInput";

export type RecipeCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  createdBy?: string | null;
  description?: string | null;
  ingredients?: IngredientCreateNestedManyWithoutRecipesInput;
  instructions?: string | null;
  name?: string | null;
};
