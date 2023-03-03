<template>
  <section>
    <TitleInitialDescription
      title="Escolha sua acomodação"
      desc="Preencha com a acomodação desejada para continuar."
    />
    <CounterPage page="1" />
    <ReservationAccommodationsModal acomodName="Quarto Simples" :acomodDescription="this.description[0]" :acomodImage="require('@/assets/images/quarto_simples.jpg')" priceOfficial="199,99" previousPrice="99,90"/>
    <ReservationAccommodationsModal acomodName="Quarto Premium" :acomodDescription="this.description[1]" :acomodImage="require('@/assets/images/quarto_premium.jpg')" priceOfficial="199,90" previousPrice="399,90"/>
    <ReservationAccommodationsModal acomodName="Quarto Bangalô" :acomodDescription="this.description[2]" :acomodImage="require('@/assets/images/bangalo03.jpg')" priceOfficial="299,90" previousPrice="599,90"/>
  </section>
</template>

<script>
import TitleInitialDescription from "../TitleInitialDescription.vue";
import CounterPage from "../CounterPage.vue";
import ReservationAccommodationsModal from "./ReservationAccommodationsModal.vue";

export default {
  name: "ReservasOption",
  components: {
    CounterPage,
    TitleInitialDescription,
    ReservationAccommodationsModal,
   },
    data() {
      return {
        description: ['Nossos quartos simples oferecem a melhor opção custo/benefício se você pretende aliar bem estar e economia.','Quartos premium com todas as comodidades essenciais para o seu conforto. Todos os nossos apartamentos luxo são de frente e proporcionam aos nossos hóspedes uma vista maravilhosa, além de um espaço reservado especialmente para aqueles que vem a trabalho e precisam utilizar seu notebook.','Nossos quartos Bangalô são exatamente como o nome já diz: muito mais conforto e requinte para nossos hóspedes. Alguns de nossos quartos bangalô são equipados com sauna.']
      }
    },
  created() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
    }
  },
};
</script>

<style>
</style>