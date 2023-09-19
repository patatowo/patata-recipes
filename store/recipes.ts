import { defineStore } from "pinia";

export const useRecipesStore = defineStore({
  id: "recipes-store",

  state: () => {
    return {
      recipes: [],
    };
  },

  actions: {
    recipesPush(recipe: any) {
      this.recipes.push(recipe);
    },
    recipesSet(recipes: any) {
      this.recipes = recipes;
    },
  },
  getters: {
    recipesList: (state) => state.recipes,
  },
});
