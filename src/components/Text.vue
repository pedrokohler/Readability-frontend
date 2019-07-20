<template>
  <div>
    <div v-for="text in texts" :key="text._id">
      <h1> {{text.title}} </h1>
      <div>
        {{text.text}}
      </div>
    </div>
  </div>
</template>

<script>
import textService from "../sevices/text.service"

export default {
  name: 'Text',
  data () {
    return {
      texts: []
    }
  },
  mounted(){
    textService.getAll()
      .then(((texts) => { 
        this.$set(this, "texts", texts)
      }).bind(this))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
