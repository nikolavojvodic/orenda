<template>
  <div class="p-2 center-block">
    <img class="img-center" :src="`~/assets/images/${imgUrl}`">
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
  },

  mounted () {
    console.log(this.imgUrl)
  }
}
</script>
