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
      <li
        class="recomendation"
        style="--background-image: url('/images/receta_otoñal.webp')"
      >
        <div class="recomendation__texts">
          <h2 class="recomendation__title">Recetas de temporada</h2>
          <p class="recomendation__description">
            Aprovecha los productos de temporada para hacer las mejores recetas
          </p>
        </div>
      </li>

      <li
        class="recomendation"
        style="--background-image: url('/images/tarta.jpg')"
      >
        <div class="recomendation__texts">
          <h2 class="recomendation__title">Lo más popular</h2>
          <p class="recomendation__description">
            Descubre las recetas más populares
          </p>
        </div>
      </li>

      <li
        class="recomendation"
        style="--background-image: url('/images/risotto.jpg')"
      >
        <div class="recomendation__texts">
          <h2 class="recomendation__title">Novedades</h2>
          <p class="recomendation__description">
            Descubre las últimas recetas añadidas
          </p>
        </div>
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
    grid-template-rows: 1fr;
    gap: 0.5em;

    // @media (max-width: 400px) {
    //   gap: 0.5em;
    // }
  }

  .recomendation {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    overflow: hidden;
    border-radius: 0.5em;

    font-size: clamp(1em, 1.5vw, 1em);

    padding: 1em;
    padding-top: 10em;

    background-image: var(--background-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
    &:before {
      position: absolute;
      content: "";
      display: block;
      inset: 0;

      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 100%
      );
    }

    transition: filter 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-size: auto 100%;
    &:hover {
      filter: brightness(80%);

      background-position: center;
      background-size: auto 105%;
    }

    &__texts {
      flex: 1;
      z-index: 1;
    }

    &__title,
    &__description {
      margin: 0;
      color: white;
      text-align: left;
    }

    &__title {
      font-weight: bold;
      font-size: 1.5em;

      margin-bottom: 0.25em;
    }

    &__description {
      font-size: 0.75em;

      opacity: 0.8;
    }

    // img {
    //   object-fit: cover;
    //   width: 100%;
    //   // height: auto;
    //   aspect-ratio: 2/1;
    // }
  }
}
</style>
