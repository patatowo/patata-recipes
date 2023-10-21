<script>
import { useRecipesStore } from "~/store/recipes";

export default {
  computed: {
    recipe() {
      return useRecipesStore().recipesList.find((recipe) => {
        return recipe.name === useRoute().params.name;
      });
    },
  },
};
</script>

<template>
  <main class="page page--home">
    <div class="banner">
      <h1>It's cooking time!</h1>
      <p>
        Aprende nuevas y deliciosas recetas para llevar el restaurante a tu casa
      </p>
    </div>

    <ul class="recomendations">
      <li class="recomendation">
        <img src="~/public/images/receta_otoñal.webp" />
        <h2>recetas de temporada</h2>
      </li>

      <li class="recomendation">
        <img src="~/public/images/tarta.jpg" />
        <h2>lo más popular</h2>
      </li>

      <li class="recomendation">
        <img src="~/public/images/risotto.jpg" alt="" />
        <h2>novedades</h2>
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
.page--home {
  max-width: 1200px;
  margin: 0 auto;

  padding: 0 0.5em;

  .banner {
    font-size: clamp(0.75em, 3vw, 1em);

    border: 0.1px solid var(--secondary-color);
    border-radius: 18px;

    background-color: var(--secondary-color);
    background-image: url("~/public/images/cocinera.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    height: 40vh;

    margin: auto;
    padding: 0 3em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;

    h1,
    p {
      margin: 0;
      max-width: 600px;
    }

    @media (max-width: 1100px) {
      background-image: none;
      align-items: center;
    }
  }

  h1,
  h2 {
    font-family: var(--font-family-special);
    text-align: center;
  }

  h1 {
    font-size: 3em;
  }

  p {
    text-align: center;
    float: left;
    font-size: 1em;
    margin: 0;
  }

  .recomendations {
    padding-left: 0;

    // display: flex;
    // flex-wrap: wrap;
    // gap: 3em 2em;
    // justify-content: space-around;

    margin: 0 auto;
    margin-top: 2em;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 1fr;
    gap: 2em;

    @media (max-width: 400px) {
      gap: 0.5em;
    }
  }

  .recomendation {
    font-size: clamp(0.75em, 2vw, 1em);

    // box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    // rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    background-color: #fff;

    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;

    overflow: hidden;
    border-radius: 15px;

    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(75%);
    }

    img {
      object-fit: cover;
      width: 100%;
      // height: auto;
      aspect-ratio: 2/1;
    }
  }
}
</style>
