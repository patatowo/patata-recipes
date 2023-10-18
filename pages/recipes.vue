<script>
import { useRecipesStore } from '~/store/recipes'

export default {
    setup() {
        const recipesStore = useRecipesStore()
        return { recipesStore }
    },
    methods: {
        goToRecipe(name) {
            navigateTo(`/${name}`)
        }
    }
}
</script>

<template>
    <h1 class="title"><span>---</span> Todas las recetas <span>---</span></h1>
    <ul class="recipes_list">
        <li @click="goToRecipe(recipe.name)" v-for="recipe in recipesStore.recipesList" class="item">

            <img :src="recipe.metadata.image_url">

            <h2>
                {{ recipe.name }}
            </h2>

        </li>
    </ul>
</template>

<style lang="scss">
.title {
    font-size: 3rem;
    text-align: center;
    font-family: var(--font-family-special);

}


.recipes_list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-around;
}

.item {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-top: 2.7em;
    padding-bottom: 3em;
    flex: 0 0 280px;
    height: 280px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    border-radius: 15px;
}

span {
    color: var(--secondary-color);
}
</style>
