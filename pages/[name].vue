<script>
import { useRecipesStore } from '~/store/recipes'

export default {
    computed: {
        recipe() {
            return useRecipesStore().recipesList.find(
                (recipe) => {
                    return recipe.name === useRoute().params.name
                }
            )
        },
        paragraphs() {
            return this.recipe?.steps.map(
                (paragraph) => {
                    return paragraph.reduce(
                        (accumulator, currentValue) => {
                            return accumulator.concat(currentValue.value ?? currentValue.name)
                        },
                        ""
                    )
                }
            )
        }
    }
}

</script>

<template>
    <main v-if="recipe">
        <h1>{{ recipe.name }}</h1>

        <p v-for="paragraph in paragraphs">
            {{ paragraph }}
        </p>
    </main>
    <div v-else>Loading...</div>
</template>