<template>
  <main>
    <section>
      <TituloDescricaoInicial
        title="Reservas"
        desc="Para orçamentos de hospedagens, preencha o formulário abaixo."
      />
      <form class="form">
        <div class="column-container">
          <div class="column column-left">
            <inputForm labelTitle="Nome:" />
            <inputForm labelTitle="Check-In:" type="date" />
            <SelectForm
              labelTitle="CRIANÇAS ATÉ 5 ANOS:"
              placeHolder="Selecione a quantidade"
            />
          </div>
          <div class="column column-center">
            <inputForm labelTitle="Email:" type="email" />
            <inputForm labelTitle="Check-Out:" type="date" />
            <SelectForm
              labelTitle="ACOMPANHANTES DE 06 A 12 ANOS:"
              placeHolder="Selecione a quantidade"
            />
          </div>
          <div class="column column-right">
            <inputForm labelTitle="Telefone:" type="tel" />
            <SelectForm
              labelTitle="CASAL (INFORME QUANTIDADE):"
              placeHolder="Selecione a quantidade"
            />
            <SelectForm
              labelTitle="ACOMPANHANTES MAIORES QUE 12 ANOS:"
              placeHolder="Selecione a quantidade"
            />
          </div>
        </div>
        <div class="textArea-container">
          <inputForm classInput="qtdTotal" labelTitle="Total de Pessoas:"/>
          <TextAreaForm labelTitle="Informações Adicionais:"  />
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import TituloDescricaoInicial from "../components/TituloDescricaoInicial.vue";
import inputForm from "../components/forms/InputForm.vue";
import SelectForm from "../components/forms/SelectForm.vue";
import TextAreaForm from "../components/forms/TextAreaForm.vue";

export default {
  name: "ReservasView",
  components: { TituloDescricaoInicial, inputForm, SelectForm, TextAreaForm },
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>

main {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin: 0 40px 40px 0;

    &:nth-child(3) {
      margin-right: 0px;
    }
  }
.textArea-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & label {
    text-align: center;
  }
}
}

@media (max-width: 770px) {
  .form .column:nth-child(3) {
    margin: 0 40px 40px 0;
  }
}

</style>