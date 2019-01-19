<template>
  <Layout>
    <h2 class="page-title">People</h2>
    <div class="page-content container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 page-text">
          We are a group of people who want to share their love for games by making them.
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12">
          <div class="d-flex flex-row">
            <div
              v-for="(person, index) in row1"
              :key="index">
              <Person
                :img-url="person.imageUrl"
                :name="person.name"
                :position="person.position"/>
            </div>
          </div>

          <div class="d-flex flex-row">
            <div
              v-for="(person, index) in row2"
              :key="index">
              <Person
                :img-url="person.imageUrl"
                :name="person.name"
                :position="person.position"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Person from '~/components/Person.vue'

export default {
  components: {
    Person
  },
  data () {
    return {
      row1: [
        {
          imageUrl: 'vukasin.jpg',
          name: 'Vukašin Ilić',
          position: 'chief executive officer'
        },
        {
          imageUrl: 'natasa.jpg',
          name: 'Nataša Ilić',
          position: 'chief creative officer'
        },
        {
          imageUrl: 'mihailo.jpg',
          name: 'Mihailo Maksimović',
          position: 'chief financial officer'
        }
      ],
      row2: [
        {
          imageUrl: 'aljosa.jpg',
          name: 'Aljoša Prodanović',
          position: 'chief operating officer'
        },
        {
          imageUrl: 'djordje.png',
          name: 'Đorđe Petrović',
          position: 'lead artist'
        },
        {
          imageUrl: 'ljuba.jpg',
          name: 'Ljubodrag Stefanović',
          position: 'chief gaming officer'
        }
      ]
    }
  }
}
</script>
