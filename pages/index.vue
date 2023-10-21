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

    <ul class="recomendations">
        <li class="recomendation">
            <img src="~/public/images/receta_otoñal.webp" />
            <h2>recetas de temporada</h2>
        </li>

        <li class="recomendation">
            <img src="~/public/images/tarta.jpg">
            <h2>lo más popular</h2>
        </li>

        <li class="recomendation">
            <img src="~/public/images/risotto.jpg" alt="">
            <h2>novedades</h2>
        </li>

    </ul>
</template>

<style>
.pink_square {
    border: 0.1px solid var(--secondary-color);
    border-radius: 18px;

    height: 25em;

    align-items: center;
    justify-content: center;
    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 2em;

    background-color: var(--secondary-color);

    text-align: right;

    overflow: hidden;
}

.square_text {
    text-align: left;

    float: left;

    margin-left: 4em;
    margin-top: 5em;
}

.cooking_drawing {
    width: 40em;
    height: 25em;
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
    display: flex;
    flex-wrap: wrap;
    max-width: 100em;
    margin: 0 auto;
    justify-content: space-around;
    margin-bottom: 3em;
}

.recomendation {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-top: 2.7em;
    padding-bottom: 0.5em;
    flex: 0 0 25em;
    margin-right: 2em;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;
}

.recomendation:hover {
    filter: brightness(75%);
}

img {
    height: 15em;
    width: 30em;
    object-fit: cover;
}

/* 
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

} */
</style>
