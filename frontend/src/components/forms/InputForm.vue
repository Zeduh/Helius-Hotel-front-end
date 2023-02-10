<template>
  <label :for="classInput">
    <p>{{ labelTitle }}</p>
    <input :class="classInput" :type="type" :placeholder="placeHolder" />
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
    type: {
      type: String,
    },
    placeHolder: {
      type: String,
    },
  },
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