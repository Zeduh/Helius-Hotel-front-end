<template>
    <div class="signup-modal__wrapper" v-if="props.renderModal">
        <form>
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name">
            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email">
        </form>
    </div>
</template>

<script setup>
const props = defineProps(["renderModal"])
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as v;
.signup-modal__wrapper {
    position: absolute;
    z-index: 3;
    background-color: v.$mainColorBlack;
    left: 50%;
}
</style>