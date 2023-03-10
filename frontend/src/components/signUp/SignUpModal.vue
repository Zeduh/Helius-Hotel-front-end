<template>
    <div class="signup-modal__wrapper" v-if="props.renderModal">
        <div class="signup-modal__wrapper__modal">
            <div class="signup-modal__wrapper__modal__header">
                <h2>Registre-se</h2>
                <button @click="closeModal">
                    <font-awesome-icon icon="fa-solid fa-x" />
                </button>
            </div>
            <form class="signup-modal__wrapper__modal__form">
                <label for="name">Nome:</label>
                <input type="text" name="name" id="name">
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email">
            </form>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(["closeModal"])
const props = defineProps(["renderModal"])

function closeModal() {
    emits("closeModal")
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as v;
.signup-modal__wrapper {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);

    &__modal {
        background-color: v.$mainColorBlack;
        color: v.$mainColorWhite;
        width: 60%;
        padding: 1.6rem;
        border-radius: 1.2rem;

        &__header {
            display: flex;
            justify-content: space-between;

            h2 {
                color: v.$mainColorYellow;
            }

            button {
                background-color: v.$mainColorYellow;
                border: none;
                width: 2.6rem;
                height: 2rem;
                border-radius: .5rem;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }

        &__form {
            display: flex;
            flex-direction: column;
            margin: 1rem 0;

            input {
                height: 2rem;
            }
        }
    }
}
</style>