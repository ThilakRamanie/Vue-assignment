<template>
  <div id="app">
    <v-tabs>
    <v-tab to="/">
      <router-link to="/" class="navElements">Inventory</router-link>
    </v-tab>
    <v-tab to="/receipt">
      <router-link to="/receipt" class="navElements">Receipt</router-link>
    </v-tab>
  </v-tabs>
    <router-view/>
  </div>
</template>

<style lang="css">
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
    text-decoration: none;
    background-color: #aaaaaa;
    margin-bottom: 1%;
  }
  .navElements {
    text-decoration: none;
    color: black;
    margin: 0 1%;
    font-family: sans-serif;
    font-size: 15px;
  }
</style>
