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
            'Authorization': `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.qvnJGw16N5jgAtbKIyI_4SHpcWFWmolGLevQ3PHokZM`
          }
        })
          .then(response => response.data)
          .then(data => {
            this.cards = data
            console.log(data)
          })
      }
    }
  }
</script>
