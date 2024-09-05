import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { IngredientTitle } from "../ingredient/IngredientTitle";

export const RecipeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="CreatedBy" source="createdBy" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="ingredients"
          reference="Ingredient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IngredientTitle} />
        </ReferenceArrayInput>
        <TextInput label="instructions" multiline source="instructions" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
