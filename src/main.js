// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/styles.scss'

import VueAgile from 'vue-agile'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {router, head, isClient}) {
  // Meta tags
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  })

  /* STYLES */
  // Add Bootstrap 4.1 styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
    integrity: 'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO',
    crossorigin: 'anonymous'
  })

  /* External script files */
  // Add jQuery
  head.script.push({
    src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
  })

  // Add Popper.js (bootstrap dependancy)
  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'
  })

  // Add Bootstrap 4.1 JS
  head.script.push({
    src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Vue Agile carousel
  Vue.use(VueAgile)
}
