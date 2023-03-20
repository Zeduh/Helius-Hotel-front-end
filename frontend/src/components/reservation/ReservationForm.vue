!<template>
  <section>
    <TitleInitialDescription
      title="Reservas"
      desc="Para iniciar com a sua reserva, preencha o formulário abaixo."
    />
    <CounterPage page="0" />
    <form class="form">
      <div class="column-container">
        <div class="column column-left">
          <inputForm labelTitle="Nome:" classInput="inputName" />
          <inputForm
            labelTitle="Check-In:"
            type="date"
            classInput="inputCheckIn"
          />
          <SelectForm
            classInput="selectOne"
            labelTitle="CRIANÇAS ATÉ 5 ANOS:"
            placeHolder="Selecione a quantidade"
            :optionsList="[0, 1, 2, 3, 4, 'Mais de 4']"
          />
        </div>
        <div class="column column-center">
          <inputForm labelTitle="Email:" type="email" classInput="inputEmail" />
          <inputForm
            labelTitle="Check-Out:"
            type="date"
            classInput="inputCheckOut"
          />
          <SelectForm
            classInput="selectTwo"
            labelTitle="ACOMPANHANTES DE 06 A 12 ANOS:"
            placeHolder="Selecione a quantidade"
            :optionsList="[0, 1, 2, 3, 4, 'Mais de 4']"
          />
        </div>
        <div class="column column-right">
          <inputForm labelTitle="Telefone:" type="tel" classInput="inputTel" />
          <SelectForm
            classInput="selectThree"
            labelTitle="CASAL (INFORME QUANTIDADE):"
            placeHolder="Selecione a quantidade"
            :optionsList="[0, 1, 2, 3, 4, 'Mais de 4']"
          />
          <SelectForm
            classInput="selectFor"
            labelTitle="ACOMPANHANTES MAIORES QUE 12 ANOS:"
            placeHolder="Selecione a quantidade"
            :optionsList="[0, 1, 2, 3, 4, 'Mais de 4']"
          />
        </div>
      </div>
      <div class="textArea-container">
        <inputForm
          classInput="totalPeople"
          type="number"
          labelTitle="Total de Pessoas:"
        />
        <TextAreaForm labelTitle="Informações:" />
      </div>

      <button class="submitForm" @click.prevent="submitForm()">
        Continuar
      </button>
    </form>
  </section>
</template>

<script>
import TitleInitialDescription from "../TitleInitialDescription.vue";
import inputForm from "../forms/InputForm.vue";
import SelectForm from "../forms/SelectForm.vue";
import TextAreaForm from "../forms/TextAreaForm.vue";
import CounterPage from "../CounterPage.vue";

export const q = (elemento) => {
  return document.querySelector(elemento);
};
export const qa = (elemento) => {
  return document.querySelectorAll(elemento);
};

export default {
  name: "ReservasForm",
  components: {
    TitleInitialDescription,
    inputForm,
    SelectForm,
    TextAreaForm,
    CounterPage,
  },
  data() {
    return {
      show: true,
    };
  },
  emits: ["change"],
  methods: {
    errorFormAlert(el) {
      alert("Existem campos invalidos, tente novamente.");
      el.style.border = "2px solid #ff0000";
    },

    validateEmptyFieldModal(field) {
      if (!field.value) {
        this.errorFormAlert(field);
        field.value = "";
        return false;
      } else {
        field.style.border = "1px solid #000";
        return true;
      }
    },

    formatDateValue(value) {
      let elArray = value.split("-");
      let arrayDay = [elArray[2]];
      let arrayMonth = [elArray[1]];
      let arrayYear = [elArray[0]];
      let newArray = [arrayDay[0], arrayMonth[0], arrayYear[0]];
      const string = newArray.join("/");

      return string;
    },

    validate() {
      const inputCheckIn = q(".inputCheckIn");
      const inputCheckOut = q(".inputCheckOut");
      const inputName = q(".inputName");
      const inputEmail = q(".inputEmail");
      const inputTel = q(".inputTel");
      const selectOne = q(".selectOne");
      const selectTwo = q(".selectTwo");
      const selectThree = q(".selectThree");
      const selectFor = q(".selectFor");
      const totalPeople = q(".totalPeople");
      const valueTel = Number(inputTel.value);

      if (!this.validateEmptyFieldModal(inputName)) return false;
      if (!this.validateEmptyFieldModal(inputEmail)) return false;
      if (!this.validateEmptyFieldModal(inputTel)) return false;
      if (!this.validateEmptyFieldModal(inputCheckIn)) return false;
      if (!this.validateEmptyFieldModal(inputCheckOut)) return false;
      if (!this.validateEmptyFieldModal(selectOne)) return false;
      if (!this.validateEmptyFieldModal(selectTwo)) return false;
      if (!this.validateEmptyFieldModal(selectThree)) return false;
      if (!this.validateEmptyFieldModal(selectFor)) return false;
      if (!this.validateEmptyFieldModal(totalPeople)) return false;
      if (totalPeople.value > 5) {
        alert("Só é possivel 5 pessoas por reserva.");
        totalPeople.value = "";
        return false;
      }

      return true;
    },

    submitForm() {
      if (this.validate()) {
        const inputCheckIn = q(".inputCheckIn");
        const inputCheckOut = q(".inputCheckOut");
        const inputName = q(".inputName");
        const inputEmail = q(".inputEmail");
        const inputTel = q(".inputTel");
        const selectOne = q(".selectOne");
        const selectTwo = q(".selectTwo");
        const selectThree = q(".selectThree");
        const selectFor = q(".selectFor");
        const totalPeople = q(".totalPeople");
        const textAreaInfos = q('.inputForm');

        const data = {
          nome: inputName.value,
          email: inputEmail.value,
          telefone: inputTel.value,
          dataCheckIn: this.formatDateValue(inputCheckIn.value),
          dataCheckOut: this.formatDateValue(inputCheckOut.value),
          qtdCasal: selectThree.value,
          qtdCrianças: selectOne.value,
          qtdPreAdolecente: selectTwo.value,
          qtdAdolecente: selectFor.value,
          totalPeople: totalPeople.value,
          infos: textAreaInfos.value
        };
        localStorage.setItem("dataUser", JSON.stringify(data));

        this.$emit("change");
        this.$store.dispatch("reservationFormChange", true);
        this.$router.push("reservas/acomodacoes");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .column-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 100%;
    & label {
      text-align: center;
    }
  }

  .submitForm {
    background-color: #cba52a;
    color: #fff;
    border: none;
    border-radius: 30px;
    padding: 15px;
    width: 150px;
    height: 60px;
    margin-top: 50px;
    cursor: pointer;

    &:hover {
      background-color: #ecb90f;
      transition: 0.1s;
    }
  }
}

@media (max-width: 770px) {
  .form .column {
    margin: 0 0px 0px 0;
  }
}
</style>