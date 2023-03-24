<template>
    <div class="reservations-list__wrapper">
        <table>
            <thead>
                <tr>
                    <td>CPF</td>
                    <td>NOME</td>
                    <td>CHECK-IN</td>
                    <td>CHECK-OUT</td>
                    <td>DATA DE NASCIMENTO</td>
                    <td>QUANTIDADE DE PESSOAS</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reservation in reservations" :key="reservation.cpf">
                    <td>{{ reservation.cpf }}</td>
                    <td>{{ reservation.nome }}</td>
                    <td>{{ reservation.dataCheckIn }}</td>
                    <td>{{ reservation.dataCheckOut }}</td>
                    <td>{{ reservation.dataNascimento }}</td>
                    <td>{{ reservation.totalPeople }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore()

const reservations = computed(() => store.getters.getReservations)
</script>

<style scoped lang="scss">
.reservations-list__wrapper {
    table {
        border-collapse: collapse;

        td {
            border: 2px solid #000;
        }
    }
}
</style>