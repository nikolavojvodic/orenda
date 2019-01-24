<template>
  <Layout>
    <h2 class="page-title">Product</h2>
    <div class="page-content container-fluid mx-0 px-0">
      
      <div class="slider-wrapper row mx-0 px-0">
        <div class="col-lg-9 col-md-9 px-0">
          <agile :options="options">
            <div class="slide">
                <g-image
                  :src="require(`@/assets/images/slider/slide1.png`)"
                  :immediate="true"
                  class="img-fluid"
                  fit="contain"/>
            </div>
            <div class="slide">
                <g-image 
                  :src="require(`@/assets/images/slider/slide2.png`)"
                  :immediate="false"
                  class="img-fluid"
                  fit="contain"/>
            </div>
            <div class="slide">
                <g-image 
                  :src="require(`@/assets/images/slider/slide3.png`)"
                  :immediate="false"
                  class="img-fluid"
                  fit="contain"/>
            </div>
            <div class="slide">
                <g-image 
                  :src="require(`@/assets/images/slider/slide4.png`)"
                  :immediate="false"
                  class="img-fluid"
                  fit="contain"/>
            </div>
            <div class="slide">
                <g-image 
                  :src="require(`@/assets/images/slider/slide5.png`)"
                  :immediate="false"
                  class="img-fluid"
                  fit="contain"/>
            </div>
          </agile>
        </div>
        <div class="col-lg-3 col-md-3">
          <div class="slider-text">
            <p>Diceroll Football is a revolutionary social game which offers its players a complete football experience.</p>
            <p>Personalized cards and unique dice enable the players to enjoy everything that makes football the most popular sport in the world, in a most dynamic and exciting way!</p>
          </div>
        </div>
      </div>

    </div>
    
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      options: {
        prevArrow: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>',
        nextArrow: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>',
        dots: false,
        infite: false,
        pauseOnHover: true
      }
    }
  }
}
</script>
