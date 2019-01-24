<template>
  <div class="text-center center-block">
    <img class="img-fluid person-img" :src="require(`@/assets/images/${imgUrl}`)">
    <p class="text-center">{{ name }} <br> ({{ position }})</p>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>
