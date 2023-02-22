<template>
    <main class="home">
        <section class="aboutSection">
            <article class="aboutArticle">
                <h1>Uma experiência única</h1>
                <div class="experienceDiv">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Repellat voluptatum error adipisci nulla. Mollitia dolore
                        maxime assumenda facilis alias voluptatum eaque amet, vel
                        sed! Officia porro sequi quasi similique rerum?Veritatis
                        incidunt repellat accusantium, nihil quos sint. Aut
                        voluptates, enim autem accusantium quia amet unde facere
                        voluptatum sequi iusto nulla quod, id eveniet sapiente
                        aliquid vel consequuntur odit, totam pariatur.Quia molestiae
                        voluptatibus ex, quae incidunt, nemo at distinctio assumenda
                        deserunt exercitationem in quaerat officia eveniet, soluta
                        itaque culpa dolore facere dolorem aliquid totam inventore!
                        Doloribus, culpa.
                    </p>
                    <img :src="require('@/assets/images/quarto_plantas.jpg')" alt="Quarto com plantas">
                </div>
            </article>
        </section>
        <section class="parallaxSection">
            <article class="parallaxArticle">
                <div class="emptyDiv">
                    <h1>A natureza em contato com você...</h1>
                </div>
            </article>
        </section>
        <section class="roomsSection">
            <article class="roomsArticle">
                <h1>Nossas Acomodações:</h1>
                <div class="roomsDivGroup">
                    <div class="roomsDiv">
                        <div class="roomCard">
                            <div class="roomCardTop">
                                <i class="fa-solid fa-bed roomIcon"></i>
                                <div>
                                    <h2>Quarto Simples</h2>
                                </div>
                            </div>
                            <img :src="require('@/assets/images/quarto_simples.jpg')" alt="Quarto Simples">
                        </div>
                        <div class="roomCard">
                            <div class="roomCardTop">
                                <i class="fa-solid fa-bath roomIcon"></i>
                                <div>
                                    <h2>Quarto Premium</h2>
                                </div>
                            </div>
                            <img :src="require('@/assets/images/quarto_premium.jpg')" alt="Quarto Premium">
                        </div>
                    </div>
                    <div class="roomsDiv">
                        <div class="roomCard">
                            <div class="roomCardTop">
                                <i class="fa-solid fa-dumbbell roomIcon"></i>
                                <div>
                                    <h2>Academia</h2>
                                </div>
                            </div>
                            <img :src="require('@/assets/images/academia.jpg')" alt="Academia">
                        </div>
                        <div class="roomCard">
                            <div class="roomCardTop">
                                <i class="fa-solid fa-person-swimming roomIcon"></i>
                                <div>
                                    <h2>Piscina</h2>
                                </div>
                            </div>
                            <img :src="require('@/assets/images/piscina01.jpg')" alt="Piscina">
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="gastronomySection">
            <article class="gastronomyArticle">
                <h1>Nossa Gastronomia:</h1>
                <div class="gastronomyInfo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur voluptate delectus nam nobis nihil mollitia asperiores voluptas ipsa, laboriosam beatae maiores iste nemo alias aspernatur error ut libero magni!
                    Aperiam perspiciatis quisquam tempora vitae non dolor. Iusto quos porro repellat illo sit? Fugit, delectus illum provident minima iusto repellendus similique dolores, sequi quisquam hic in quo dolore recusandae voluptatibus.
                    Delectus aut voluptatem aliquid nostrum quo blanditiis vel iste.</p>
                    <img :src="require('@/assets/images/comida.jpg')" alt="astronomia">
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as v;

@media screen and (max-width: 550px) {
    .aboutSection {
        padding-top: 0rem;
    }
    .experienceDiv {
        flex-direction: column;
        flex-wrap: wrap;
        
        p {
            text-align: justify;
            margin-bottom: 2.5rem;
        }
        img {
            width: 100%;
        }
    }
}
@media screen and (min-width: 550px) {
    .experienceDiv {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;

        img, p {
            width: 50%;
        }
    }
}

.aboutSection {
    .experienceDiv {
        display: flex;

        img {
            height: 100%;
        }
    }
}


@media screen and (max-width: 550px) {
    .emptyDiv {
        padding: 0 2rem;
    }
}
.parallaxSection {
    background-image: url('@/assets/images/hotel02.jpg');
    background-position: center;
    background-attachment: fixed;
    position: relative;
    height: 110vh;

    .emptyDiv {
        display: flex;
        justify-content: center;
        align-items: center;

        color: v.$mainColorWhite;
        background-color: rgba(32, 31, 31, 0.326);
        position: absolute;
        height: 110vh;
        top: 0;
        right: 0;
        width: 100%;
    }
}


@media screen and (max-width: 550px) {
    .roomCard {
        width: 100%;
    }
}
@media screen and (min-width: 550px) {
    .roomCard {
        width: 48%;
    }
}
.roomsSection {
    background-color: v.$mainColorYellow;
    color: v.$mainColorBlack;

    .roomsDivGroup {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        img {
            width: 50%;
            height: 100%;
            border-radius: .8rem;
        }
        
        .roomsDiv {
            display: flex;
            flex-wrap: wrap;
        }
        .roomCard {
            display: flex;
            flex-direction: column;
            align-items: center;

            background-color: v.$mainColorWhite;
            border-radius: 1rem;
            margin: .6rem .6rem;

            .roomCardTop {
                display: flex;
                justify-content: space-between;
                align-items: center;

                width: 100%;
                height: 3rem;
                margin: .8rem 0;
                padding: 0 1.4rem;
                overflow: hidden;

                div {
                    margin: auto;
                }
            }
            img {
                width: 94%;
                margin-bottom: 1.4rem;
            }
            .roomIcon {
                font-size: 2rem;
            }
        }
    }
}


@media screen and (max-width: 550px) {
    .gastronomyArticle {
        div {
            flex-direction: column;
        }
        img, p {
            width: 100%;
            margin: 1rem 0;
        }
    }
}
@media screen and (min-width: 550px) {
    .gastronomyArticle {
        div {
            flex-direction: row;
        }
        img, p {
            width: 50%;
            margin: 0 .5rem;
        }
    }
}
.gastronomySection {
    background-color: v.$mainColorBlack;
    color: v.$mainColorWhite;

    img {
        height: 100%;
    }
    .gastronomyArticle {
        div {
            display: flex;
            align-items: center;
            text-align: justify;
        }
    }
}
</style>

<script>
export default {
    name: "HomeContent"
}
</script>