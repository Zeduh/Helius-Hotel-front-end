<template>
    <div class="side-menu__wrapper">
        <h2>Helius Hotel</h2>
        <ul class="side-menu__wrapper__list">
            <li>
                <RouterLink to="/view-users">Ver usuários</RouterLink>
            </li>
            <li v-if="userLevel > 1">
                <RouterLink to="/">Editar usuários</RouterLink>
            </li>
            <li>
                <RouterLink to="/">Ver reservas</RouterLink>
            </li>
            <li v-if="userLevel > 1">
                <RouterLink to="/">Editar reservas</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore()

const loginState = computed(() => store.getters.getLoginState)
const userLevel = computed(() => store.getters.getUserLevel)


</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as v;
    .side-menu__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: v.$mainColorLightGrey;
        border-radius: .6rem;
        padding: 1rem;
        width: 14rem;

        &__list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            width: 100%;
            padding: 0;

            li {
                list-style: none;

                color: black;
            }
        }
    }
</style>