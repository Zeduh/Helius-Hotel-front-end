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
        </table>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore()

const users = computed(() => store.getters.getUsers)
</script>