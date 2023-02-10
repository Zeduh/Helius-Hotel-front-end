<template>
  <label :for="classInput">
    <p>{{ labelTitle }}</p>
    <select :class="classInput">
        <option v-for="list in optionsList" :key="list" :value=""></option>
                <!-- trabalhar com ref no value rever video aula para relembrar  -->
    </select>
  </label>
</template>

<script>
export default {
  name: "inputForm",
  props: {
    classInput: {
      type: String,
      default: "inputForm",
    },
    labelTitle: {
      type: String,
    },
    optionsList: {
      type: [Array,Object],
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 40px;
  height: 35px;
  width: 200px;
  font-size: 17px;
  padding: 10px;
}

label {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>