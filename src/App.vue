<template>
  <div id="app">
    <v-app>
      <Toolbar />
      <v-content>
        <v-container grid-list-xl>
          <router-view/>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { Toolbar, Footer }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
