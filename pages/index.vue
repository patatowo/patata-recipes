<script>
import { CooklangRepository } from "cookhub";

export default {
    data() {
        return {
            recipes: []
        }
    },
    methods: {
        add() {
        }
    },
    async mounted() {
        // const repo = new CooklangRepository();
        // await repo.initialize("patatowo", "recipes", "es");

        // console.log(repo.recipes)

        // this.recipes = repo.recipes.map((recipe, index) => ({
        //     ...recipe,
        //     name: repo.files[index].name.replace(".cook", "")
        // }))
        // console.log(this.recipes)
    },
}
</script>

<template>
    <div v-for="recipe in recipes">
        <h1>
            {{ recipe.name }}
        </h1>
    </div>
</template>

<style></style>
