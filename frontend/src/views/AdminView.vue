<template>
    <div v-if="loginState && userLevel > 0" class="admin-view__wrapper">
        <h1>Painel Administrativo</h1>
        <div class="admin-view__wrapper__dashboard">
            <div class="admin-view__wrapper__dashboard__side-menu">
                <SideMenu />
                <RouterView />
            </div>
        </div>
    </div>
    <div v-else class="admin-view__wrapper">
        <h1>Acesso apenas para usuários administrativos.</h1>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import SideMenu from "@/components/admin/SideMenu.vue";

const store = useStore()

const loginState = computed(() => store.getters.getLoginState)
const userLevel = computed(() => store.getters.getUserLevel)

</script>

<style scoped lang="scss">
    .admin-view__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__dashboard {
            display: flex;
        }
    }
</style>