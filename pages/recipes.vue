<script>
import { useRecipesStore } from "~/store/recipes";

export default {
	setup() {
		const recipesStore = useRecipesStore();
		return { recipesStore };
	},
	methods: {
		goToRecipe(name) {
			navigateTo(`/${name}`);
		},
	},
	computed: {
		recipe() {
			return useRecipesStore().recipesList.find(
				(recipe) => {
					return recipe.name === useRoute().params.name
				}
			)
		},
	}
};
</script>

<template>
	<main class="page page--recipes">
		<h1 class="title"><span>---</span> Todas las recetas <span>---</span></h1>
		<ul class="recipes_list">
			<li @click="goToRecipe(recipe.name)" v-for="recipe in  recipesStore.recipesList " class="item">
				<img :src="recipe.metadata.image_url" />

				<h2>
					{{ recipe.name }}
				</h2>

				<div class="specifications">
					<div class="time">
						<p>Tiempo: {{ recipe.metadata.time }} </p>
					</div>

					<div class="difficulty">
						<p>Dificultad: </p>
						<div class="stars">
							<svg class="void" v-for="index in 5" :key="index" xmlns="http://www.w3.org/2000/svg" height="1em"
								viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
								<path
									d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
							</svg>
							<svg class="full" v-for="star in 1" :key="star" xmlns="http://www.w3.org/2000/svg" height="1em"
								viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
								<path
									d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
							</svg>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</main>
</template>

<style lang="scss">
.page--recipes {

	padding: 2em;

	.title {
		font-size: 3rem;
		text-align: center;
		font-family: var(--font-family-special);
		margin: 0;

		@media (max-width: 1000px) {
			span {
				display: none;
			}
		}
	}

	.recipes_list {
		display: flex;
		flex-wrap: wrap;
		max-width: 1280px;
		margin: 0 auto;
		justify-content: space-around;
		padding-top: 2.7em;
		padding-left: 0;
		gap: 2em;
	}

	.item {
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

		display: flex;
		flex: 0 0 15em;
		flex-direction: column;

		overflow: hidden;
		border-radius: 15px;

		padding-bottom: 3em;

		height: 13em;

		align-items: center;
		justify-content: center;

		background: #f4e9d7;

		transition: all 0.4s ease-in-out;

		&:hover {
			filter: brightness(80%);
		}

		img {
			height: 10em;
			width: 30em;
			object-fit: cover;
		}

		h2 {
			font-family: var(--font-family-special);
			margin-bottom: 0.5em;
			font-size: x-large;
		}

		.specifications {
			padding-right: 2.5em;
			display: flex;
			flex-direction: column;
			justify-content: left;
			flex: none;

			.time {
				p {
					font-size: large;
					margin-bottom: 0;
					color: var(--font-color);
				}
			}

			.difficulty {
				display: flex;
				align-items: center;

				p {
					font-size: large;
					margin-top: 0.1;
					color: var(--font-color);
					padding-right: 0.3em;
				}

				.stars {
					display: flex;

					svg {
						fill: var(--special-color);
					}

					.void {
						position: relative;
					}

					.full {
						position: absolute;
					}
				}
			}
		}
	}
}

span {
	color: var(--secondary-color);
}
</style>
