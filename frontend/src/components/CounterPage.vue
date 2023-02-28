<template>
  <div class="count-container">
    <p class="el">Dados</p>
    <span>></span>
    <p class="el">Escolha sua acomodação</p>
    <span>></span>
    <p class="el">Reserva Realizada</p>
  </div>
</template>

<script>
export default {
    name: 'CounterPage',
    props: {
        page: {
            type: [Number,String]
        }
    },
    methods: {
        setSelected() {
            const p = document.querySelectorAll('.el');
            let array = [];
            p.forEach(v => {
                array.push(v);
            });

            array[this.page].classList.add('selected');
        }
    },
    mounted() {
        this.setSelected()
    }
}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 50px;
}

.el {
    font-weight: bold;

    &:nth-child(3) {
        margin-right: 0px;
    }
}

span {
    margin-right: 20px;
    margin-left: 20px;
}



.selected {
    background-color: red;
}
</style>