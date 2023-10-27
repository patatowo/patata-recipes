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
        },
        ingredients() {
            return this.recipe?.ingredients.map(
                (ingredient) => {
                    return ingredient
                }
            )
        }
    }
}

</script>

<template>
    <main v-if="recipe">
        <div class="image_div">
            <img class="recipe-image" :src="recipe.metadata.image_url">
        </div>

        <h1>{{ recipe.name }}</h1>


        <div class="recipe_content">
            <div class="ingredients">
                <h2>Ingredientes</h2>
                <ul>
                    <li v-for="ingredient in ingredients">
                        {{ ingredient.quantity }}
                        {{ ingredient.units }}
                        de
                        {{ ingredient.name }}

                    </li>

                </ul>
            </div>


            <div class="steps">
                <p v-for="paragraph in paragraphs" class="paragraph">
                    {{ paragraph }}
                </p>
            </div>
        </div>

    </main>
    <main v-else>Loading...</main>
</template>

<style lang="scss">
h1 {
    font-size: 3rem;
    font-family: var(--font-family-special);
    text-align: left;
    margin-left: 1em;
}

.image_div {
    text-align: center;
}

.recipe-image {
    margin: 0em;
    width: 83em;
    height: 15em;
    object-fit: cover;
    border-radius: 15px;

}

.recipe_content {
    display: flex;
    text-align: left;
}

.ingredients {
    background-color: var(--secondary-color);
    border-radius: 13px;
    padding-right: 2em;
    margin-left: 3em;
    padding-bottom: 0.5em;
    color: rgb(27, 27, 27);


    text-align: left;
    float: left;
    min-width: 14em;
}

.steps {
    margin-left: 3em;
    margin-right: 3em;

}

.paragraph {
    color: var(--font-color);
    margin: 0.5em;
    text-align: justify;
}
</style>