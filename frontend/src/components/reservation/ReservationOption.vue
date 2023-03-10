<template>
  <section>
    <div class="fade" v-show="fadeShow"></div>
    <TitleInitialDescription
      title="Escolha sua acomodação"
      desc="Preencha com a acomodação desejada para continuar."
    />
    <CounterPage page="1" />

    <div class="modal-open" v-show="modalBuy">
      <div class="acomod--item1">
        <div class="acomod--item1--group">
          <h2>Minha Reserva</h2>
          <p>Clique em continuar para finalizar sua reserva</p>
        </div>
        <hr />
        <div class="acomod--item1--group2">
          <div class="resume-modal--info">
            <p class="date-res">
              Quarto<span></span>{{choiceRooms}}
            </p>
            <p class="qtServices">
              Serviços adicionais<span>{{choiceQtdServices}}</span>
              <button class="reviewServices addServices services-buy--s">
                Revisar
              </button>
            </p>
            <hr />
            <p class="value">
              Valor serviços adicionais <span class="valueTotal">R$ {{valueServicesTotal}}</span>
            </p>
            <p class="value">
              Valor acomodações <span class="valueTotal">R$ 000</span>
            </p>
            <p class="value">
              Valor total <span class="valueTotal">R$ 000</span>
            </p>
          </div>
          <div class="acomod--item1---columnc_button">
            <button class="acomod-next" @click="closeModalBuy()">
              Continuar Escolhendo
            </button>
            <button class="acomod-buy acomod-buy--p">Finalizar Pedido</button>
          </div>
        </div>
      </div>
    </div>
    <ReservationServicesModal
      v-if="showServices"
      @showModalButton="closeModalServices()"
      ref="services"
    />
    <ReservationAccommodationsModal
      ref="acomodSimples"
      acomodName="Quarto Simples"
      :acomodDescription="this.description[0]"
      :acomodImage="require('@/assets/images/quarto_simples.jpg')"
      :priceOfficial="
        String(price.simples.current.toFixed(2)).replace('.', ',')
      "
      :previousPrice="
        String(price.simples.previus.toFixed(2)).replace('.', ',')
      "
      @openModal="openModalServices(1)"
      @buy="buyReservation(1)"
      @addQtd="changeQtd('simples', 'add')"
      @remQtd="changeQtd('simples', 'rem')"
    />
    <ReservationAccommodationsModal
      acomodName="Quarto Premium"
      :acomodDescription="this.description[1]"
      :acomodImage="require('@/assets/images/quarto_premium.jpg')"
      :priceOfficial="
        String(price.premium.current.toFixed(2)).replace('.', ',')
      "
      :previousPrice="
        String(price.premium.previus.toFixed(2)).replace('.', ',')
      "
      @openModal="openModalServices(2)"
      @buy="buyReservation(2)"
      @addQtd="changeQtd('premium', 'add')"
      @remQtd="changeQtd('premium', 'rem')"
    />
    <ReservationAccommodationsModal
      acomodName="Quarto Bangalô"
      :acomodDescription="this.description[2]"
      :acomodImage="require('@/assets/images/bangalo03.jpg')"
      :priceOfficial="
        String(price.bangalo.current.toFixed(2)).replace('.', ',')
      "
      :previousPrice="
        String(price.bangalo.previus.toFixed(2)).replace('.', ',')
      "
      @openModal="openModalServices(3)"
      @buy="buyReservation(3)"
      @addQtd="changeQtd('bangalo', 'add')"
      @remQtd="changeQtd('bangalo', 'rem')"
    />
  </section>
</template>

<script>
import TitleInitialDescription from "../TitleInitialDescription.vue";
import CounterPage from "../CounterPage.vue";
import ReservationAccommodationsModal from "./ReservationAccommodationsModal.vue";
import ReservationServicesModal from "./ReservationServicesModal.vue";

export default {
  name: "ReservasOption",
  components: {
    CounterPage,
    TitleInitialDescription,
    ReservationAccommodationsModal,
    ReservationServicesModal,
  },
  data() {
    return {
      showServices: false,
      fadeShow: false,
      modalBuy: false,
      choiceRooms: '',
      choiceQtdServices: 0,
      valueServicesTotal: '0,00',
      price: {
        simples: {
          previus: 199.9,
          current: 99.9,
        },
        premium: {
          previus: 399.9,
          current: 199.9,
        },
        bangalo: {
          previus: 599.9,
          current: 299.9,
        },
      },
      qtdRoom: 0,
      description: [
        "Nossos quartos simples oferecem a melhor opção custo/benefício se você pretende aliar bem estar e economia.",
        "Quartos premium com todas as comodidades essenciais para o seu conforto. Todos os nossos apartamentos luxo são de frente e proporcionam aos nossos hóspedes uma vista maravilhosa, além de um espaço reservado especialmente para aqueles que vem a trabalho e precisam utilizar seu notebook.",
        "Nossos quartos Bangalô são exatamente como o nome já diz: muito mais conforto e requinte para nossos hóspedes. Alguns de nossos quartos bangalô são equipados com sauna.",
      ],
    };
  },
  methods: {
    reloadScrollBars() {
      document.documentElement.style.overflow = "auto";
      document.body.scroll = "yes";
    },
    unloadScrollBars() {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
    },
    closeModalServices() {
      this.fadeShow = false;
      setTimeout(() => {
        document.querySelector(".modal-open2").style.opacity = "0";
      }, 100);
      this.showServices = false;
      this.reloadScrollBars();
    },
    openModalServices(acomod) {
      this.fadeShow = true;
      setTimeout(() => {
        document.querySelector(".modal-open2").style.opacity = "100";
      }, 100);
      this.showServices = true;
      this.unloadScrollBars();

      document.querySelector(".fade").addEventListener("click", () => {
        this.closeModalServices();
      });
    },
    openModalBuy() {
      this.fadeShow = true;
      setTimeout(() => {
        document.querySelector(".modal-open").style.opacity = "100";
      }, 100);
      this.modalBuy = true;
      this.unloadScrollBars();

      document.querySelector(".fade").addEventListener("click", () => {
        this.closeModalBuy();
      });
    },
    closeModalBuy() {
      this.fadeShow = false;
      setTimeout(() => {
        document.querySelector(".modal-open").style.opacity = "0";
      }, 200);
      this.modalBuy = false;
      this.reloadScrollBars();
    },
    changeQtd(acomodType, action) {
      if (acomodType == "simples" && action == "add") {
        this.price.simples.current = this.price.simples.current * 1.2;
        this.price.simples.previus = this.price.simples.previus * 1.2;
      }
      if (acomodType == "simples" && action == "rem") {
        this.price.simples.current = this.price.simples.current / 1.2;
        this.price.simples.previus = this.price.simples.previus / 1.2;
      }
      if (acomodType == "premium" && action == "add") {
        this.price.premium.current = this.price.premium.current * 1.2;
        this.price.premium.previus = this.price.premium.previus * 1.2;
      }
      if (acomodType == "premium" && action == "rem") {
        this.price.premium.current = this.price.premium.current / 1.2;
        this.price.premium.previus = this.price.premium.previus / 1.2;
      }
      if (acomodType == "bangalo" && action == "add") {
        this.price.bangalo.current = this.price.bangalo.current * 1.2;
        this.price.bangalo.previus = this.price.bangalo.previus * 1.2;
      }
      if (acomodType == "bangalo" && action == "rem") {
        this.price.bangalo.current = this.price.bangalo.current / 1.2;
        this.price.bangalo.previus = this.price.bangalo.previus / 1.2;
      }
    },
    displayInfos() {
      const priceServices = localStorage.getItem('valueServices') == null ? '0,00' : localStorage.getItem('valueServices');
      const qtdServices = localStorage.getItem('qtdServices') == null ? 0 : localStorage.getItem('qtdServices');

      this.valueServicesTotal = priceServices;
      this.choiceQtdServices = qtdServices;
    },
    buyReservation(acomod) {
      const qtdRoom = document.querySelectorAll(".qtdRoomS");
      const qtdRoomText = document.querySelectorAll(".qtdRoomP");
      if (acomod == 1) {
        if (qtdRoom[0].innerHTML == 0) {
          alert("Quantidade de quarto invalida");
          qtdRoomText[0].style.color = "red";
          return;
        } else {
          qtdRoomText.forEach((v) => {
            v.style.color = "black";
          });
        }
      }

      if (acomod == 2) {
        if (qtdRoom[1].innerHTML == 0) {
          alert("Quantidade de quarto invalida");
          qtdRoomText[1].style.color = "red";
          return;
        } else {
          qtdRoomText.forEach((v) => {
            v.style.color = "black";
          });
        }
      }

      if (acomod == 3) {
        if (qtdRoom[2].innerHTML == 0) {
          alert("Quantidade de quarto invalida");
          qtdRoomText[2].style.color = "red";
          return;
        } else {
          qtdRoomText.forEach((v) => {
            v.style.color = "black";
          });
        }
      }
      this.displayInfos();
      this.openModalBuy();
    },
  },
  created() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.fade {
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 887;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.466);
}

.modal-open {
  display: flex;
  position: fixed;
  opacity: 0;
  left: 50%;
  top: 50%;
  width: 30%;
  min-width: 290px;
  transform: translate(-50%, -50%);
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.897);
  border-radius: 5px;
  border: 3px solid #134429d2;
  filter: drop-shadow(0 0 5px #1344297c);
  z-index: 888;
  transition: 0.2s;

  .blur {
    filter: blur(50px);
  }

  .acomod--item1 {
    &--group {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px;
    }

    & p {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
    }

    &--group2 {
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin-top: 0px;

      .resume-modal--info {
        & p {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          text-align: left;
          font-size: 16px;
          font-style: italic;

          & b {
            margin-right: -40px;
          }
        }

        & hr {
          margin-bottom: 20px;
        }

        & span {
          margin-right: 10px;
          margin-left: 20px;
          font-size: 20px;
          font-weight: bold;
          font-style: normal;
        }
      }

      .acomod--item1---columnc_button {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
        & button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #134429;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 15px;
          width: 120px;
          height: 50px;
          margin-right: 20px;
          cursor: pointer;

          &:hover {
            background-color: #cba52a;
            transition: 0.1s;
          }
        }

        & button:nth-child(2) {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>