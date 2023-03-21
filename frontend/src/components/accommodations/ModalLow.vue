<template>
  <div class="accommodations-bedrooms--item---info" id="simple-info">
    <h4>
      {{roomName}}
    </h4>
    <p>{{desc1}}</p>
    <p>{{desc2}}</p>
    <p>{{desc3}}</p>
    <p>{{desc4}}</p>
    <button @click="$emit('reservationPage')">Reservar</button>
  </div>
</template>

<script>
export default {
  name: "ModalLow",
  emits: ['reservationPage'],
  props: {
    roomName: {
      type: String,
    },
    desc1: {
      type: String,
    },
    desc2: {
      type: String,
    },
    desc3: {
      type: String,
    },
    desc4: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.accommodations-bedrooms {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;

  &--item {
    display: flex;
    justify-content: center;
    margin-top: 150px;
    width: 100%;
    position: relative;

    &---info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 350px;
      width: 200px;
      top: -40px;
      left: 40px;
      background-color: #134429;
      border-radius: 20px;
      position: absolute;
      padding: 10px;

      & h4 {
        color: #fff;
        margin-top: 20px;
        margin-bottom: 50px;
      }

      & p {
        margin-bottom: 20px;
        color: #fff;
      }

      & button {
        color: #fff;
        outline: none;
        border: none;
        height: 40px;
        width: 120px;
        border-radius: 30px;
        background: #ffbf00;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;

        &:hover {
          background-color: #ffd000;
          transition: all ease 0.2s;
        }
      }
    }
  }
}

@media (max-width: 1115px) {
  .accommodations-bedrooms--item---info {
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 28%;
    top: -40px;
    left: 40px;

    & h4 {
      color: #fff;
      padding-top: 0px;
      padding-bottom: 20px;
      margin: 0;
      font-size: 15px;
    }

    & p {
      margin: 0;
      font-size: 15px;
      padding-bottom: 15px;
      color: #fff;
    }

    & button {
      color: #fff;
      outline: none;
      border: none;
      height: 40px;
      width: 60%;
      border-radius: 30px;
      background: #ffbf00;
      cursor: pointer;

      &:hover {
        background-color: #ffd000;
        transition: all ease 0.2s;
      }
    }
  }
}

@media (max-width: 890px) {
  .accommodations-bedrooms--item---info {
    position: relative;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 200px;
    top: -50px;
    left: 0;

    & h4 {
      color: #fff;
      padding-top: 0px;
      padding-bottom: 20px;
      margin: 0;
      font-size: 15px;
    }

    & p {
      margin: 0;
      font-size: 14px;
      padding-bottom: 15px;
      color: #fff;
    }

    & button {
      color: #fff;
      outline: none;
      border: none;
      height: 40px;
      width: 60%;
      border-radius: 30px;
      background: #ffbf00;
      cursor: pointer;

      &:hover {
        background-color: #ffd000;
        transition: all ease 0.2s;
      }
    }
  }
}
</style>