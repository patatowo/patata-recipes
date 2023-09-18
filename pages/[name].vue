<template>
    <div>
        {{ $route.params.name }}
    </div>
</template>

<script>
import { useRecipesStore } from '~/store/recipes'
export default {
    mounted() {
        console.log(useRecipesStore().recipesList);
    }
}
</script>