<template>
    <header id="headerPage">
        <div class="topBar">
            <div id="mobileMenuDiv">
                <button type="button" id="mobileMenuBtnOpen">
                    <i class="fa fa-solid fa-bars fa-2x menuIcon"></i>
                </button>
                <div id="mobileMenu">
                    <button id="mobileMenuBtnClose">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <ul>
                        <li>
                            <a href="/index.html">Home</a>
                        </li>
                        <li>
                            <a href="/pages/o_hotel.html">O Hotel</a>
                        </li>
                        <li>
                            <a href="/pages/acomodacoes.html">Acomodações</a>
                        </li>
                        <li>
                            <a href="/pages/reservas.html">Reservas</a>
                        </li>
                        <li>
                            <a href="/pages/contato.html">Contato</a>
                        </li>
                        <li>
                            <a href="/pages/login.html">Login</a>
                        </li>
                        <li>
                            <a href="#" id="signUpBtnSS">Cadastre-se</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="userArea">
                <a class="hide" id="usernameElement" href=""></a>
                <a class="hide" id="logoutElement" href="">Sair</a>
            </div>
        </div>
        <div class="trademarkArea">
            <div id="blackBackground">
                <h1 class="logo">Helius Hotel</h1>
                <h2>A sua estadia em primeiro lugar</h2>
            </div>
        </div>
        <nav class="headerMenu">
            <ul>
                <li>
                    <a href="/index.html">Home</a>
                </li>
                <li>
                    <a href="/pages/o_hotel.html">O Hotel</a>
                </li>
                <li>
                    <a href="/pages/acomodacoes.html">Acomodações</a>
                </li>
                <li>
                    <a href="/pages/reservas.html">Reservas</a>
                </li>
                <li>
                    <a href="/pages/contato.html">Contato</a>
                </li>
                <li>
                    <a href="/pages/login.html">Login</a>
                </li>
                <li>
                    <a href="#" id="signUpBtnLS">Cadastre-se</a>
                </li>
            </ul>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

@media screen and (max-width: 550px) {
    .topBar {
        position: fixed;
        z-index: 1;
        width: 100vw;
    }

    #mobileMenuDiv {
        visibility: visible;
    }

    .headerMenu {
        display: none;
    }

    .trademarkArea {
        background-position-y: 36rem;

        #blackBackground {
            align-items: flex-start;
            padding: 0 2rem;

            h2 {
                width: 16rem;
            }
        }
    }
}

@media screen and (min-width: 550px) {
    #mobileMenuDiv {
        visibility: hidden;
    }

    .trademarkArea {
        background-position: bottom;

        #blackBackground {
            align-items: end;
            padding: 0 8rem;
        }
    }
}

header {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    color: $mainColorBlack;
}

.topBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: $mainColorBlack;

    a {
        text-decoration: none;
        color: $mainColorWhite;

        &:hover {
            text-decoration: underline;
        }
    }

    &>* {
        margin: .4rem .4rem;
        padding: .2rem .4rem;
    }

    #userArea {
        a {
            margin: 0 .5rem;
            padding: 0 .2rem;
        }
    }
}

.trademarkArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    background-image: url("../assets/images/hotel01.jpg");
    filter: brightness(100%) saturate(50%);
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    width: 100%;
    height: 18rem;
    color: $mainColorWhite;

    #blackBackground {
        display: flex;
        flex-direction: column;
        justify-content: center;

        background-color: rgba(53, 53, 53, 0.419);
        width: 100%;
        height: 100%;
        position: absolute;
    }

    h2 {
        font-family: "Montserrat", sans-serif;
        font-weight: 100;
    }
}

#mobileMenuDiv {
    button {
        background-color: $mainColorBlack;
        border: none;

        .menuIcon {
            color: $mainColorWhite;
        }
    }
}

#mobileMenu {
    display: flex;
    flex-direction: column;

    width: 60vw;
    height: 100vh;
    background-color: $mainColorBlack;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: none;

    #mobileMenuBtnClose {
        display: flex;
        justify-content: start;

        padding: 1rem 3rem;
        font-size: 2rem;
        color: $mainColorWhite;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        height: 100%;

        li {
            width: fit-content;
            margin: 1rem 0;

            &:nth-child(7) {
                background-color: $mainColorYellow;
                padding: 1rem;
                border-radius: 2rem;
            }
        }
    }
}

.headerMenu {
    background-color: $mainColorYellow;

    ul {
        display: flex;
        justify-content: center;

        height: 100%;
        list-style: none;

        li {
            display: inline;
            margin: 0 1.4rem;
            padding: 1rem 0.8rem;
            height: 100%;
            border-bottom: 0.2rem solid $mainColorYellow;

            a {
                text-decoration: none;
                color: $mainColorBlack;
            }

            &:hover {
                border-bottom: 0.2rem solid $mainColorBlack;
            }

            &:nth-child(7) {
                border-bottom: 0.2rem solid $mainColorBlack;
            }
        }
    }
}
</style>

<script>
export default {
    name: "HeaderComponent"
}
</script>