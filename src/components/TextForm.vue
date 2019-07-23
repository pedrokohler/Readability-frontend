<template>
  <v-card>
    <v-toolbar
      card
      color="green"
      dark
    >
      <!-- <v-icon>arrow_back</v-icon> -->
      <v-toolbar-title>Insert Text</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="handleSend">
        <v-icon>send</v-icon>
      </v-btn>
    </v-toolbar>
    <v-form>
      <v-text-field
        v-model="title"
        label="Title"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        v-model="text"
        label="Text"
        counter
        maxlength="5000"
        full-width
        single-line
      ></v-textarea>
    </v-form>
  </v-card>
</template>

<script>
import textService from '../sevices/text.service'

export default {
    name:"textForm",
    data(){
      return {
        title: "",
        text: ""
      }
    },
    methods:{
      handleSend(){
        this.sendText();
        this.clearInputs();
      },
      clearInputs(){
        this.title = "";
        this.text = "";
      },
      sendText(){
        textService.create(this.title, this.text)
          .then(res => this.$emit('updateTexts', res))
          .catch(err =>{
            window.alert(err.message);
          })
          
      }
    }
}
</script>
