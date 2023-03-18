<template>
  <p v-if="show">
    <span ref="countRoomList">{{count}}x</span>
    {{roomName}}
    <button @click="() => {show = false; $emit('update')}">Remover</button>
  </p>
</template>

<script>
export default {
  name: "CountRoomList",
  data() {
    return {
        count: 0,
        show: true,
    };
  },
    emits: ['update'],
  props: {
    roomName: {
        type: [String,Object,Array]
    },
    destroy: {
        type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
div {
    display: flex;
}
button {
    cursor: pointer;
}
</style>