<template>
  <div class="container">
    <div class="container-column">
      <div class="column-left">
        <InputFormVue labelTitle="Nome:" type="text" :valueForm="nameUser"/>
      </div>
      <div class="column-mid">
        <InputFormVue labelTitle="Email:" type="email" :valueForm="emailUser"/>
      </div>
      <div class="column-right">
        <InputFormVue labelTitle="Senha Atual:" type="password"/>
        <InputFormVue labelTitle="Nova Senha:" type="password"/>
      </div>
    </div>
    <div class="container-button">
      <button @click="changeData()">Salvar Alterações</button>
      <button @click="$emit('backPage')">Voltar</button>
    </div>
  </div>
</template>

<script>
import InputFormVue from "../forms/InputForm.vue";

export default {
  name: "ContentDataUserEdit",
  components: { InputFormVue },
  props: {
    nameUser: {
      type: String,
    },
    emailUser: {
      type: String,
    },
  },
  emits: ["backPage"],
  methods: {},
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
.container-column {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 20px;

  & .column-left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  & .column-mid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  & .column-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
}

.container-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

button {
  margin-top: 10px;
  background-color: #153131;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 15px;
  transition: 0.1s;
  cursor: pointer;
  margin-right: 30px;
  margin-bottom: 20px;

  &:hover {
    background-color: #224b4b;
  }
}
</style>