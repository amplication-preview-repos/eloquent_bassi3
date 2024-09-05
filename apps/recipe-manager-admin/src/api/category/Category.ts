import { Recipe } from "../recipe/Recipe";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  recipes?: Array<Recipe>;
  updatedAt: Date;
};
