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
		paragraphs() {
			return this.recipe?.steps.map(
				(paragraph) => {
					return paragraph.reduce(
						(accumulator, currentValue) => {
							return accumulator.concat(currentValue.value ?? currentValue.name)
						},
						""
					)
				}
			)
		},
		ingredients() {
			return this.recipe?.ingredients.map(
				(ingredient) => {
					return ingredient
				}
			)
		}
	}
}

</script>

<template>
	<main class="page page--recipe" v-if="recipe">
		<div class="image_div">
			<img class="recipe-image" :src="recipe.metadata.image_url">
		</div>


		<div class="recipe">
			<h1>{{ recipe.name }}</h1>

			<div class="recipe-content">
				<div class="ingredients">
					<h2>Ingredientes</h2>
					<ul>
						<li v-for="ingredient in ingredients">
							{{ ingredient.quantity }}
							{{ ingredient.units }}
							de
							{{ ingredient.name }}

						</li>

					</ul>
				</div>


				<div class="steps">
					<p v-for="paragraph in paragraphs" class="paragraph">
						{{ paragraph }}
					</p>
				</div>
			</div>
		</div>


	</main>
	<main v-else>Loading...</main>
</template>

<style lang="scss">
.page--recipe {
	padding-top: 1em;
	padding-left: 1em;
	padding-right: 1em;

	.image_div {
		text-align: center;

		.recipe-image {
			margin: 0em;
			width: 100%;
			height: 35vh;
			object-fit: cover;
			border-radius: 15px;

		}
	}


	.recipe {
		padding-left: 2em;
		padding-right: 2em;

		@media (max-width: 1100px) {
			padding-left: 0;
			padding-right: 0;

		}

		h1 {
			font-size: 3rem;
			font-family: var(--font-family-special);
			text-align: left;

			@media (max-width: 1100px) {
				text-align: center;
			}
		}

		.recipe-content {
			display: flex;
			text-align: left;
			gap: 3em;

			.ingredients {
				background-color: var(--secondary-color);
				color: rgb(27, 27, 27);

				border-radius: 13px;

				padding-right: 2em;
				padding-bottom: 0.5em;
				text-align: left;

				min-width: 14em;
				height: 100%;
				margin: 0;

				h2 {
					font-family: var(--font-family-special);
					text-align: center;
				}
			}

			.steps {
				width: 100%;

				.paragraph {
					color: var(--font-color);
					text-align: justify;
				}
			}

			@media (max-width: 1100px) {
				flex-direction: column;
				align-items: center;
			}
		}


	}


}
</style>