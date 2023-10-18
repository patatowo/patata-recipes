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
        <div class="image_div">
            <img :src="recipe.metadata.image_url">
        </div>

        <h1>{{ recipe.name }}</h1>


        <div class="recipe_content">
            <div class="ingredients">
                <h2>Ingredientes</h2>
                <ul>
                    <li>1 ud de cebolla</li>
                    <li>200 g de mantequilla</li>
                    <li>2 dientes de ajo</li>
                    <li>300 g de setas</li>
                    <li>200 g de parmesano</li>
                    <li>2 ramas de tomillo</li>
                    <li>Pimienta</li>
                    <li>Sal</li>
                </ul>
            </div>


            <div class="steps">
                <p v-for="paragraph in paragraphs">
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

img {
    margin: 0em;
    width: 83em;
    height: 15em;
    object-fit: cover;

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
    min-width: 12em;
}

.steps {
    margin-left: 3em;
    margin-right: 3em;

}

p {
    color: var(--font-color);
    margin-bottom: 0.5em;
    text-align: justify;
}
</style>