<template>
    <header class="header">
        <div class="perfil">
            <img src="~/public/images/perfil_icon_black.png" alt="">
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
    margin-bottom: 2em;
    padding-bottom: 0.1em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px -3px, rgba(0, 0, 0, 0.05) 0px 2px 2px -2px;

    .perfil {
        text-align: left;
        float: left;
        margin-left: 2em;

        img {
            width: 2.5em;
            height: 2.5em;
            object-fit: contain;
            text-align: left;
        }
    }

    ul {
        padding-top: 0.5em;
        padding-right: 2.2em;
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