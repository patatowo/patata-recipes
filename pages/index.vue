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

        <img class="cocinera" src="~/public/images/cocinera.png" />
    </div>
    <div class="recetas_temporada">
        <img class="foto_temporada" src="~/public/images/receta_otoñal.webp" />
    </div>
    <div>
        <img class="foto_novedades" src="~/public/images/risotto.jpg" alt="">

    </div>
</template>

<style>
.div1 {
    border: 0.1px solid var(--secondary-color);
    border-radius: 18px;

    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 2em;

    background-color: var(--secondary-color);

    text-align: right;
}

.div2 {
    text-align: left;

    float: left;

    margin-left: 4em;
    margin-top: 5em;
}

.cocinera {
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

.recetas_temporada {
    border: 0.1px solid black;
    border-radius: 18px;
    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 2em;
    margin-right: 57em;
    padding-bottom: 3em;
}

.foto_temporada {
    width: 25em;
    height: 15em;
    text-align: center;
}

.foto_novedades {
    width: 25em;
    height: 15em;
    text-align: left;
}
</style>
