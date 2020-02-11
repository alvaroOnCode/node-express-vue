<template src='./Recipe.html' lang='html'>
</template>

<script>
  import http from 'axios'

  export default {
    name: 'recipe',
    data () {
      return {
        cards: []
      }
    },
    mounted () {
      this.getRecipes()
    },
    methods: {
      getRecipes () {
        return http({
          method: 'GET',
          url: `${process.env.API}recipes`,
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        })
          .then(response => response.data)
          .then(data => {
            this.cards = data
          })
          .catch(() => this.$router.push({ name: 'login' }))
      }
    }
  }
</script>
