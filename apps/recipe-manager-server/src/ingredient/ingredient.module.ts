import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IngredientModuleBase } from "./base/ingredient.module.base";
import { IngredientService } from "./ingredient.service";
import { IngredientController } from "./ingredient.controller";
import { IngredientResolver } from "./ingredient.resolver";

@Module({
  imports: [IngredientModuleBase, forwardRef(() => AuthModule)],
  controllers: [IngredientController],
  providers: [IngredientService, IngredientResolver],
  exports: [IngredientService],
})
export class IngredientModule {}
