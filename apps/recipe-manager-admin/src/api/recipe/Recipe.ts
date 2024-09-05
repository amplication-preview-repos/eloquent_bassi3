import { Category } from "../category/Category";
import { Ingredient } from "../ingredient/Ingredient";

export type Recipe = {
  category?: Category | null;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  ingredients?: Array<Ingredient>;
  instructions: string | null;
  name: string | null;
  updatedAt: Date;
};
