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
        <img :src="recipe.metadata.image_url" alt="">

        <p v-for="paragraph in paragraphs">
            {{ paragraph }}
        </p>
    </main>
    <main v-else>Loading...</main>
</template>

<style lang="scss">
h1 {
    font-size: 3rem;
    text-align: center;
    font-family: var(--font-family-special);
}

img {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    height: 500px;
    width: 1000px;

}
</style>