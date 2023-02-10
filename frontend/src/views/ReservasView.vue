<template>
  <section>
    <TituloDescricaoInicial
      title="Reservas"
      desc="Para orçamentos de hospedagens, preencha o formulário abaixo."
    />
    <form class="form">
      <div class="column-container">
        <div class="column column-left">
          <inputForm />
          <inputForm />
          <inputForm />
        </div>
        <div class="column column-center">
          <inputForm />
          <inputForm />
          <inputForm />
          <inputForm />
        </div>
        <div class="column column-right">
          <inputForm />
          <inputForm />
          <inputForm />
        </div>
      </div>
      <div class="textArea-container">
        <TextAreaForm />
      </div>
    </form>
  </section>
</template>

<script>
import TituloDescricaoInicial from "../components/TituloDescricaoInicial.vue";
import inputForm from "../components/InputForm.vue";
import TextAreaForm from "../components/TextAreaForm.vue";

export default {
  name: "ReservasView",
  components: { TituloDescricaoInicial, inputForm },
};
</script>


<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
}

.form {
  display: flex;
  flex-direction: column;

  .column-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    margin: 0 60px 40px 0;

    &:nth-child(3) {
      margin-right: 0px;
    }
  }
}
</style>