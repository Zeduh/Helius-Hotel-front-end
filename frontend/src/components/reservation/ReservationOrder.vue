<template>
  <div>
    <TitleInitialDescription
      title="Resumo do Pedido"
      desc="Para orçamentos de hospedagens, preencha o formulário abaixo."
    />
    <CounterPage page="3" />
    <h1>Order</h1>
  </div>
</template>

<script>
import TitleInitialDescription from "../TitleInitialDescription.vue";
import CounterPage from "../CounterPage.vue";

export default {
  name: "ReservasOrder",
  components: {CounterPage,TitleInitialDescription},
  created() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
    }
  },
};
</script>

<style>
</style>