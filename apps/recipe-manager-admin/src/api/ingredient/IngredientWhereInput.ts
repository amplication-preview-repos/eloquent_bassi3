import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type IngredientWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
  recipe?: RecipeWhereUniqueInput;
};
