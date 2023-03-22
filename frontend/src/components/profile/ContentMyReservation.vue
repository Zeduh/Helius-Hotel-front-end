<template>
  <div class="container">
    <p
      class="empty"
      v-if="showEmpty"
      @click="$router.push({ name: 'reservas' })"
    >
      Não há reservas cadastradas, para fazer sua reserva clique aqui.
    </p>
    <div class="modal"></div>
  </div>
</template>

<script>
export default {
  name: "ContentMyReservation",
  data() {
    return {
      showEmpty: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.empty {
  margin-top: 20px;
  cursor: pointer;
}
</style>