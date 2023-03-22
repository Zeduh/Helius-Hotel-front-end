<template>
  <div class="container-profile">
    <div class="container-column">
      <nav>
        <ul>
          <li><button class="selected">Dados Cadastrais</button></li>
          <li><button>Minhas Reservas</button></li>
          <li><button>Sair</button></li>
        </ul>
      </nav>

      <div class="modal">
        <div v-if="showIntro" class="container-text">
          <h2>Olá {{ nameUser }}</h2>
          <p class="text-modal">
            {{ descContent }}
          </p>
          <div class="hr" />
        </div>
        <ContentDataUserVue v-if="showDataUser" />
        <ContentDataUserVueEdit v-if="showDataUserEdit" />
        <ContentMyReservationVue v-if="showMyReservation" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentDataUserVue from './ContentDataUser.vue';;
import ContentDataUserVueEdit from './ContentDataUserEdit.vue';
import ContentMyReservationVue from './ContentMyReservation.vue';

export default {
  name: "MenuProfile",
  components: {ContentDataUserVue,ContentDataUserVueEdit,ContentMyReservationVue},
  data() {
    return {
      nameUser: "",
      descContent: "",
      showIntro: true,
      showDataUser: true,
      showDataUserEdit: false,
      showMyReservation: false
    };
  },
};
</script>

<style lang="scss" scoped>
.container-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
.container-column {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.selected {
  background-color: #153131;
  color: #fff;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  min-width: 500px;
  height: 300px;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  filter: drop-shadow(0 0 2px #ccc);

  .container-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .text-modal {
      font-size: 13px;
      line-height: 17px;
      color: #b8b8b8;
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
  }
}

.hr {
  height: 1px;
  width: 100%;
  background-color: #999;
}

nav {
  margin-left: -40px;
  margin-top: -75px;
  padding: 20px;
  & ul {
    & li {
      margin-bottom: 20px;
      list-style: none;
      & button {
        background: none;
        border: none;
        cursor: pointer;
        transition: 0.1s;
        border-radius: 10px;
        font-size: 15px;
        padding: 18px;
        width: 200px;
        text-align: left;

        &:hover {
          background-color: #153131;
          color: #fff;
        }
      }
    }
  }
}
</style>