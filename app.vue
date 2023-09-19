
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { useRecipesStore } from '~/store/recipes'
import { CooklangRepository } from "cookhub";

export default {
  async mounted() {
    const repo = new CooklangRepository();
    await repo.initialize("patatowo", "recipes", "es");

    const recipes = repo.recipes.map((recipe, index) => ({
      ...recipe,
      name: repo.files[index].name.replace(".cook", "")
    }))

    useRecipesStore().recipesSet(recipes)

    console.log(recipes)
  }
}
</script>