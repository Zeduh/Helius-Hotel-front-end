<template>
  <div>
 
    <h1>Order</h1>
  </div>
</template>

<script>
import TitleInitialDescription from "../TitleInitialDescription.vue";
import CounterPage from "../CounterPage.vue";

export default {
  name: "ReservasOrder",
  components: {CounterPage,TitleInitialDescription},
  mounted() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
    }
  },
};
</script>

<style>
</style>