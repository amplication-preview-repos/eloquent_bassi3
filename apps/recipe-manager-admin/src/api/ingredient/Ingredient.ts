import { Recipe } from "../recipe/Recipe";

export type Ingredient = {
  createdAt: Date;
  id: string;
  name: string | null;
  quantity: number | null;
  recipe?: Recipe | null;
  updatedAt: Date;
};
