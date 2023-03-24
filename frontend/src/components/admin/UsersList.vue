<template>
    <div class="users-list__wrapper">
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Nível de Usuário</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.email">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.userLevel }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore()

const users = computed(() => store.getters.getUsers)
</script>

<style scoped lang="scss">
.users-list__wrapper {
    table {
        border-collapse: collapse;
        
        td {
            border: 2px solid #000;
        }
    }
}
</style>