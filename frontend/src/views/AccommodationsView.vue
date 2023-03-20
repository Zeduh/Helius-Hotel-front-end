<template>
  <section id="heading1">
    <TitleInitialDescription>
      <h1>Nossas Acomodações</h1>
      <hr />
      <p>
        As acomodações do Helius Hotel foram projetadas para oferecer todo o
        conforto e tranqüilidade que você merece. Todos os nossos quartos ficam
        próximos a sala de jogos, ao restaurante, às piscinas e possuem uma
        vista magnífica para as piscinas!
      </p>
      <p>
        Seja qual for o seu objetivo: comemorações em família, apenas um momento
        para descansar, até mesmo uma confraternização com a empresa ou encontro
        de amigos, o Hotel Helius tem a acomodação certa para você. Aproveite a
        oportunidade e faça agora mesmo sua reserva.
      </p>
    </TitleInitialDescription>

    <SearchMenu :acomodNames="accommodations" />
  </section>
</template>

<script>
import TitleInitialDescription from "../components/TitleInitialDescription.vue";
import SearchMenu from "../components/SearchMenu.vue";

export default {
  name: "AccommodationsView",
  components: { TitleInitialDescription, SearchMenu },
  data() {
    return {
        accommodations: ['Simples','Premium','Bangalô']
    }
  },
  mounted() {
    
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

h1 {
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: normal;
  text-align: center;
}

p {
  font-size: 17px;
  font-weight: bold;
  min-width: 250px;
  margin-bottom: 50px;
  text-align: center;
}

hr {
  width: 100%;
  margin-bottom: 30px;
}
</style>