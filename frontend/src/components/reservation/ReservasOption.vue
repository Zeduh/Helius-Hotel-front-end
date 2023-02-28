<template>
  <div>
    <TituloDescricaoInicial
      title="Reservas"
      desc="Para orçamentos de hospedagens, preencha o formulário abaixo."
    />
    <CounterPage page="1" />
    <h1>Option</h1>
  </div>
</template>

<script>
import TituloDescricaoInicial from "../TituloDescricaoInicial.vue";
import CounterPage from "../CounterPage.vue";
export default {
  name: "ReservasOption",
  components: { CounterPage, TituloDescricaoInicial },
  created() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
    }
  },
};
</script>

<style>
</style>