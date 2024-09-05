/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Recipe as PrismaRecipe,
  Ingredient as PrismaIngredient,
  Category as PrismaCategory,
} from "@prisma/client";

export class RecipeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RecipeCountArgs, "select">): Promise<number> {
    return this.prisma.recipe.count(args);
  }

  async recipes(args: Prisma.RecipeFindManyArgs): Promise<PrismaRecipe[]> {
    return this.prisma.recipe.findMany(args);
  }
  async recipe(
    args: Prisma.RecipeFindUniqueArgs
  ): Promise<PrismaRecipe | null> {
    return this.prisma.recipe.findUnique(args);
  }
  async createRecipe(args: Prisma.RecipeCreateArgs): Promise<PrismaRecipe> {
    return this.prisma.recipe.create(args);
  }
  async updateRecipe(args: Prisma.RecipeUpdateArgs): Promise<PrismaRecipe> {
    return this.prisma.recipe.update(args);
  }
  async deleteRecipe(args: Prisma.RecipeDeleteArgs): Promise<PrismaRecipe> {
    return this.prisma.recipe.delete(args);
  }

  async findIngredients(
    parentId: string,
    args: Prisma.IngredientFindManyArgs
  ): Promise<PrismaIngredient[]> {
    return this.prisma.recipe
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ingredients(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.recipe
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}