<template>
    <a href="#" @click="toggleSignUpModal">Cadastre-se</a>
    <SignUpModal :render-modal="showModal" />
</template>

<script setup>
import SignUpModal from "./SignUpModal.vue";
import { ref } from "vue"

let showModal = ref(false)

function toggleSignUpModal() {
    showModal.value = !showModal.value
}

</script>