<script>
import { useRecipesStore } from '~/store/recipes'

export default {
    setup() {
        const recipesStore = useRecipesStore()
        return { recipesStore }
    }
}
</script>

<template>
    <h1 class="title">Todas las recetas</h1>
    <main class="recipes">
        <section class="recipes__list">
            <div v-for="recipe in recipesStore.recipesList" class="recipes__list__item">
                <img :src="recipe.metadata.image_url" alt="">

                <h2>
                    <NuxtLink :to="'/' + recipe.name">{{ recipe.name }}</NuxtLink>
                </h2>

                <p>
                    {{ recipe.metadata.description }}
                </p>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
.title {
    font-size: 3rem;
    text-align: center;
    font-family: var(--font-family-special);

}

.recipes {
    &__list {
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin-left: 100px;
        margin-right: 100px;

        &__item {
            padding: 2em;

            @media (max-width: 575px) {
                padding: 1em 0.5em;
            }

            align-content: start;

            border: 4px solid var(--secondary-color);
            border-radius: 18px;

            transition: border-color 0.25s ease-out;

            @media(hover: hover) {
                &:hover {
                    border-color: #a4c5d6;
                }
            }

            display: grid;
            grid-template: "image title"
            "image description";
            gap: 0.5em 2em;

            &>img {
                grid-area: image;

                width: 200px;
                aspect-ratio: 1/1;

                object-fit: cover;

            }

            &>h2 {
                grid-area: title;
                align-items: center;

                font-family: var(--font-family-special);

                margin: 0;

            }

            &>p {
                grid-area: description;

                margin: 0;
            }

            &:nth-child(even) {
                grid-template: "title image"
                    "description image";
            }

        }
    }
}
</style>
