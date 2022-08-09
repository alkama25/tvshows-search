<template>
  <div id="app">
    <header-bar></header-bar>
    <search-bar></search-bar>
    <shows-list></shows-list>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import SearchBar from './components/SearchBar.vue'
import ShowsList from './components/ShowsList.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    SearchBar,
    ShowsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
