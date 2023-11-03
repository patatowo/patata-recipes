<template>
    <header class="header">
        <div class="header__actions">
            <div class="profile">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
            </div>
        </div>

        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/recipes">Recetas</NuxtLink>
            </li>
        </ul>
    </header>
</template>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;

    padding-bottom: 0.1em;
    padding-left: 2.2em;
    padding-right: 2.2em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px -3px, rgba(0, 0, 0, 0.05) 0px 2px 2px -2px;

    &__actions {
        display: flex;
        align-items: center;
    }

    .profile {
        background-color: var(--secondary-color);
        border-radius: 50%;
        aspect-ratio: 1/1;
        width: auto;
        height: auto;
        padding: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            fill: var(--special-color);

        }
    }

    ul {
        list-style: none;

        font-family: var(--font-family-special);

        display: flex;
        justify-content: flex-end;
        gap: 1em;



        li {
            a {
                text-decoration: none;
                color: var(--fg-color);
                opacity: 0.75;

                transition: opacity 0.25s ease-out;

                &:hover {
                    opacity: 1;
                }

                // COPY PASTE https://www.30secondsofcode.org/css/s/hover-underline-animation/
                display: inline-block;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: var(--primary-color);
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }

                &:hover::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }

                // END COPY PASTE
            }

        }
    }
}
</style>