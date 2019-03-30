import { schema } from "normalizr";

export const recipeSchema = new schema.Entity(
  "recipes",
  {},
  { idAttribute: "_id" }
);
