<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="text in texts"
      :key="text._id"
    >
      <template v-slot:header>
        <div>
          <strong>{{text.title}}</strong>
        </div>
        <div>
          Readability: {{text.testScores.readability.toFixed(2)}} |||
          Flesch Readability: {{text.testScores.fleschReadability.toFixed(2)}} |||
          Flesch-Kincaid: {{text.testScores.fleschKincaid.toFixed(2)}}
        </div>
      </template>
      <v-card>
        <v-card-text>{{text.text}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
  methods:{
    updateTexts(data){
      if(data){
        this.texts.unshift(data)
      }else{
        textService.getAll()
          .then(((texts) => { 
            this.$set(this, "texts", texts)
          }).bind(this))
      }      
    }
  },
  mounted(){
    this.updateTexts();
  }
}
</script>