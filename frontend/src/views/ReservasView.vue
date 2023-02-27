<template>
  <main>
    <ReservasForm ref="form" v-if="formPage"/>
    <ReservasOption v-if="optionPage"/>
    <ReservasOrder v-if="orderPage"/>
  </main>
</template>

<script>
import ReservasForm from "../components/ReservasForm.vue";
import ReservasOption from "../components/ReservasOption.vue";
import ReservasOrder from "../components/ReservasOrder.vue";


export default {
  name: "ReservasView",
  components: { ReservasForm, ReservasOption, ReservasOrder },
  data() {
    return {
      formPage: true,
      optionPage:false,
      orderPage:false
    };
  },
  mounted() {
    console.log(this.$route.params.id)
    if (this.$route.params.name == 'accommodation-options' && this.$store.state.reservationsSent == true) {
      this.formPage = false;
      this.optionPage = true;
      return;
    }

    if (this.$route.params.name == 'order' && this.$store.state.reservationsSent == true) {
      this.formPage = false;
      this.orderPage = true;
      return;
    } 

    this.$router.push('/reservas')
  }
};
</script>


<style lang="scss" scoped>

main {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>