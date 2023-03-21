<template>
  <div class="accommodations-bedrooms--item">
    <ModalLow :roomName="roomName" :desc1="desc1" :desc2="desc2" :desc3="desc3" :desc4="desc4" @reservationPage="$emit('reservationPage')"/>
    <ImageBanner :image="image" />
  </div>
</template>

<script>
import ImageBanner from "./ImageBanner.vue";
import ModalLow from "./ModalLow.vue";

export default {
  name: "AccommodationsModal",
  components: { ImageBanner, ModalLow },
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
    image: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped>
.accommodations-bedrooms--item {
  display: flex;
  justify-content: center;
  margin-top: 150px;
  width: 100%;
  position: relative;
}

@media (max-width: 1115px) {
  .accommodations-bedrooms--item {
    flex-direction: column;
    align-items: center;
    margin-top: 180px;
  }
}
</style>