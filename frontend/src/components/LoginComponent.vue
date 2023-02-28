<template>
<div>
  <a href="#" @click="showModal = true">Fazer Login</a>
          <div v-if="showModal" class="modal">
            <div class="modal-content">
              <h2>Login</h2>
              <form>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">

                <label for="senha">Senha:</label>
                <input type="password" id="password" name="password">

                <button type="submit">Entrar</button>
              </form>
              <p><a href="#">Esqueci minha senha</a></p>
              <p>Não tem conta? <a href="#">Cadastre-se</a></p>
              <button type="button" @click="showModal = false" >Fechar</button>
            </div>
          </div>
</div>
</template>

<script>
export default {
  name:'LoginComponent',
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    close() {
      this.showModal = false;
    },
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_variables.scss" as v;

.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: v.$mainColorBlack;
  padding: 20px;
  width: 400px;
  border-radius: 5px;
}

p{
  color: v.$mainColorWhite;
}

h2 {
  text-align: center;
  margin-top: 0;
  color: v.$mainColorYellow;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  color: v.$mainColorYellow;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

button[type="submit"] {
  background-color: v.$mainColorYellow;
  color: v.$mainColorBlack;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button[type="button"] {
  background-color: v.$mainColorYellow;
  color: v.$mainColorBlack;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

a {
  color: v.$mainColorWhite;
}

</style>