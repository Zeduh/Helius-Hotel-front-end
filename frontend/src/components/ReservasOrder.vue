<template>
  <div>
    <h1>oDER</h1>
  </div>
</template>

<script>
export default {
  name: "ReservasOrder",
  created() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
    }
  }
};
</script>

<style>
</style>