import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IngredientListRelationFilter } from "../ingredient/IngredientListRelationFilter";

export type RecipeWhereInput = {
  category?: CategoryWhereUniqueInput;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  ingredients?: IngredientListRelationFilter;
  instructions?: StringNullableFilter;
  name?: StringNullableFilter;
};
