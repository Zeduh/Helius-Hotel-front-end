<template>
  <main>
    <ReservasForm ref="form" v-if="formPage" @change="changeStatusShow()"/>
    <ReservasOption v-if="optionPage"/>
    <ReservasOrder v-if="orderPage"/>
  </main>
</template>

<script>
import ReservasForm from "../components/reservation/ReservasForm.vue";
import ReservasOption from "../components/reservation/ReservasOption.vue";
import ReservasOrder from "../components/reservation/ReservasOrder.vue";


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
  flex-direction: column;
}

</style>