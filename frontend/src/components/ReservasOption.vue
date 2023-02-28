<template>
  <div>
    <h1>Option</h1>
  </div>
</template>

<script>
export default {
  name: "ReservasOption",
  created() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
    }
  },
};
</script>

<style>
</style>