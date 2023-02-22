<template>
  <main>
      <HeaderComponent />
      <h1>Homeee13123e</h1>
      <FooterComponent />
  </main>
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent
},
};
</script>
