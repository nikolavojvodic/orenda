<template>
  <div class="container-fluid pl-0 pr-0 orenda-wrapper">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
        <span class="punchline">Never forget to play</span>
        <img class="logo" src="../assets/images/logo.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <g-link class="nav-link" to="/" :exact="true">HOME</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/product">PRODUCT</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" :to="{ name: 'about' }">ABOUT US</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/preorder">PRE-ORDER</g-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- End navigation -->

    <!-- Below nav decoration -->
    <div class="row mx-0 nav-decoration">
      <div
        v-show="$route.name === 'home'"
        class="purple-line col"/>
      
      <div 
        class="orange-line"
        :class="orangeClasses"/>
    </div>
    <!-- End below nav decoration -->
    
    <!-- Content -->
    <div class="page-wrapper">
      <slot/>
    </div>
    <!-- End content -->

    <div
      v-show="$route.name !== 'home'"
      class="row mr-0 ml-0 nav-decoration">
      <div class="purple-line bottom col-md-6 offset-md-6"/>
    </div>

  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    orangeClasses () {
      return this.$route.name !== 'home'
        ? 'col-md-6 offset-md-6'
        : 'col' 
    }
  }
}
</script>
