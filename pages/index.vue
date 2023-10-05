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
    <div class="pink_square">
        <div class="square_text">
            <h1>
                It's cooking time!
            </h1>
            <p>
                Aprende nuevas y deliciosas recetas para llevar
                el restaurante a tu casa

            </p>
        </div>

        <img class="cooking_drawing" src="~/public/images/cocinera.png" />
    </div>

    <div class="recomendations">
        <div class="season_recipes">
            <img class="seaseon_image" src="~/public/images/receta_otoñal.webp" />
            <h2>recetas de temporada</h2>
        </div>

        <div class="popular_recipes">
            <img class="popular_image" src="~/public/images/tarta.jpg">
            <h2>lo más popular</h2>
        </div>

        <div class="new_recipes">
            <img class="new_image" src="~/public/images/risotto.jpg" alt="">
            <h2>novedades</h2>
        </div>

    </div>
</template>

<style>
.pink_square {
    border: 0.1px solid var(--secondary-color);
    border-radius: 18px;

    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 2em;

    background-color: var(--secondary-color);

    text-align: right;
}

.square_text {
    text-align: left;

    float: left;

    margin-left: 4em;
    margin-top: 5em;
}

.cooking_drawing {
    width: 40em;
    text-align: right;
}

h1 {
    font-family: var(--font-family-special);
    font-size: 3em;
    text-align: center;
}

p {
    text-align: center;
    float: left;
    font-size: 1em;
    margin: 0;
}

h2 {
    font-family: var(--font-family-special);
    text-align: center;
}

.recomendations {
    text-align: center;
}


.season_recipes {
    border-radius: 18px;
    margin-left: 2em;
    margin-bottom: 2em;
    float: left;
}

.seaseon_image {
    width: 25em;
    height: 15em;
    border-radius: 18px;

}


.popular_recipes {
    border-radius: 18px;
    margin-right: 2em;
    margin-bottom: 2em;
    float: right;
}

.popular_image {
    width: 25em;
    height: 15em;
    border-radius: 18px;
}


.new_recipes {
    border-radius: 18px;
    margin-bottom: 2em;
}

.new_image {
    width: 25em;
    height: 15em;
    border-radius: 18px;

}
</style>
