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
    }
}
</script>

<template>
    <div class="div1">
        <div class="div2">
            <h1>
                It's cooking time!
            </h1>
            <p>
                Aprende nuevas y deliciosas recetas para llevar
                el restaurante a tu casa

            </p>
        </div>

        <img src="~/public/images/cocinera.png" />
    </div>
</template>

<style>
.div1 {
    border: 0.1px solid var(--secondary-color);
    border-radius: 18px;
    margin-left: 2em;
    margin-right: 2em;

    background-color: var(--secondary-color);
    text-align: right;
}

.div2 {
    text-align: left;
    float: left;
    margin-left: 4em;
    margin-top: 5em;
}

img {
    width: 50%;
    text-align: right;
}

h1 {
    font-family: var(--font-family-special);
    font-size: 300%;
    text-align: center;
}

p {
    text-align: center;
    float: left;
    font-size: 100%;
    margin: 0;
}
</style>
