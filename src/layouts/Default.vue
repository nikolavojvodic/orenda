<template>
  <div class="container-fluid pl-0 pr-0 orenda-wrapper">
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
              <g-link class="nav-link" to="/" exact>HOME</g-link>
            </li>
            <li class="nav-item">
              <g-link class="nav-link" to="/product" exact>PRODUCT</g-link>
            </li>
            <li class="nav-item">
              <g-link class="nav-link" to="/about" exact>ABOUT US</g-link>
            </li>
            <li class="nav-item">
              <g-link class="nav-link" to="/preorder" exact>PRE-ORDER</g-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="purple-line"></div>
      <div class="orange-line"></div>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>