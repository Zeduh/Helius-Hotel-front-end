<template>
  <div class="modal-open2">
    <h2>Serviços adicionais</h2>
    <div class="resume-modal--info">
      <label for="piscinaChk">
        <input type="checkbox" name="" class="chk piscinaChk" id="piscinaChk" v-model="checked[0]" @click="addValue"/>
        Acesso a piscina <b>24 horas</b>
      </label>
      <label for="gamesChk">
        <input type="checkbox" name="" class="chk gamesChk" id="gamesChk" v-model="checked[1]" @click="addValue"/>
        Acesso a sala de jogos <b>24 horas</b>
      </label>
      <label for="roomChk">
        <input type="checkbox" name="" class="chk roomChk" id="roomChk" v-model="checked[2]" @click="addValue"/>
        Serviço de quarto <b>24 horas</b>
      </label>
      <label for="foodChk">
        <input type="checkbox" name="" class="chk foodChk" id="foodChk" v-model="checked[3]" @click="addValue"/>
        Almoço e janta inclusos
      </label>
            <button class="clearServices" @click="() => {valueTotal = 0.00; checked = [false,false,false,false]}">Limpar serviços</button>
      <p class="value">
        Valor total dos serviços - <span class="valueFinalServices">R$ {{String(valueTotal.toFixed(2)).replace('.', ',')}}</span>
      </p>
    </div>
    <div class="resume-modal--buy">
      <button class="acomod-next2" @click="$emit('showModalButton')">Continuar escolhendo</button>
      <button class="servicesBuy" @click="saveInfo()">Adicionar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationServicesModal",
  emits: ['showModalButton'],
  data() {
    return {
      valueTotal: 0,
      checked: {
        piscina: false,
        games: false,
        room: false,
        food: false
      }
    }
  },
  methods: {
    addValue(e){
      const el = e.target;
      if (el.checked) {
        this.valueTotal = this.valueTotal + 80;
      } else {
        this.valueTotal = this.valueTotal - 80;
      }
    },
    saveInfo(){
      let value = 0;
      value = this.valueTotal;
      localStorage.setItem('valueServices',value)
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-open2 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  opacity: 0;
  min-width: 280px;
  width: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid #ffbb00;
  filter: drop-shadow(0 0 3px #ffbb0086);
  z-index: 888;
  transition: 0.2s;

  & h2 {
    margin-bottom: 20px;
  }

  .resume-modal--info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;

    & p {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-style: italic;

      & span {
        margin-top: 10px;
        font-weight: bold;
        font-style: normal;
      }
    }

    & label {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 17px;
      cursor: pointer;
      margin-bottom: 20px;
      & input {
        margin-right: 20px;
        height: 25px;
        width: 25px;
      }
      & b {
        text-align: center;
        margin-left: 10px;
        border: 1px solid #ffbb00;
        padding: 10px;
        border-radius: 20px;
      }
    }
  }

  .resume-modal--buy {
    display: flex;
    justify-content: center;
    align-items: center;
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #cba52a;
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 15px;
      width: 120px;
      height: 50px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background-color: #ecb90f;
        transition: 0.1s;
      }
    }

    & button:nth-child(2) {
      margin-left: 20px;
    }
  }
}

.clearServices{
      background-color: #cba52a;
  border: none;
  border-radius: 1px;
  color: #fff;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
            background-color: #ecb90f;
        transition: 0.1s;
  }
}
</style>