<template>
  <main>
    <ReservasForm ref="form" v-if="formPage" @change="changeStatusShow()"/>
    <ReservasOption v-if="optionPage"/>
    <ReservasOrder v-if="orderPage"/>
  </main>
</template>

<script>
import ReservasForm from "../components/reservation/ReservationForm.vue";
import ReservasOption from "../components/reservation/ReservationOption.vue";
import ReservasOrder from "../components/reservation/ReservationOrder.vue";


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
  methods: {
    changeStatusShow() {
      this.formPage = false;
      this.optionPage = true;
    },
    pageNumber() {
      if(this.formPage) return 1;
      if(this.optionPage) return 2;
      if(this.orderPage) return 3;
    }
  },
  mounted() {

    if (this.$route.params.name == 'acomodacoes' && this.$store.state.reservationsSent == true) {
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

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>