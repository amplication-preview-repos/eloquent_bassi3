/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { IngredientService } from "../ingredient.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IngredientCreateInput } from "./IngredientCreateInput";
import { Ingredient } from "./Ingredient";
import { IngredientFindManyArgs } from "./IngredientFindManyArgs";
import { IngredientWhereUniqueInput } from "./IngredientWhereUniqueInput";
import { IngredientUpdateInput } from "./IngredientUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IngredientControllerBase {
  constructor(
    protected readonly service: IngredientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ingredient })
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createIngredient(
    @common.Body() data: IngredientCreateInput
  ): Promise<Ingredient> {
    return await this.service.createIngredient({
      data: {
        ...data,

        recipe: data.recipe
          ? {
              connect: data.recipe,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,
        quantity: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Ingredient] })
  @ApiNestedQuery(IngredientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ingredients(@common.Req() request: Request): Promise<Ingredient[]> {
    const args = plainToClass(IngredientFindManyArgs, request.query);
    return this.service.ingredients({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quantity: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ingredient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ingredient(
    @common.Param() params: IngredientWhereUniqueInput
  ): Promise<Ingredient | null> {
    const result = await this.service.ingredient({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quantity: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Ingredient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateIngredient(
    @common.Param() params: IngredientWhereUniqueInput,
    @common.Body() data: IngredientUpdateInput
  ): Promise<Ingredient | null> {
    try {
      return await this.service.updateIngredient({
        where: params,
        data: {
          ...data,

          recipe: data.recipe
            ? {
                connect: data.recipe,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,
          quantity: true,

          recipe: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Ingredient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteIngredient(
    @common.Param() params: IngredientWhereUniqueInput
  ): Promise<Ingredient | null> {
    try {
      return await this.service.deleteIngredient({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          quantity: true,

          recipe: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}