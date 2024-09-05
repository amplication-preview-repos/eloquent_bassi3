import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { IngredientUpdateManyWithoutRecipesInput } from "./IngredientUpdateManyWithoutRecipesInput";

export type RecipeUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  createdBy?: string | null;
  description?: string | null;
  ingredients?: IngredientUpdateManyWithoutRecipesInput;
  instructions?: string | null;
  name?: string | null;
};
