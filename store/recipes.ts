import { defineStore } from "pinia";

export const useRecipesStore = defineStore({
  id: "recipes-store",

  state: () => {
    return {
      recipes: ["vulo"],
    };
  },

  actions: {
    recipesPush: (recipe) => {
      this.recipes.push(recipe);
    },
    recipesSet: (recipes) => {
      this.recipes = recipes;
    },
  },
  getters: {
    recipesList: (state) => state.recipes,
  },
});
