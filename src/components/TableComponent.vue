<template>
  <v-container>
  <v-card width="100vw">
    <v-data-table
      dense
      :headers="headers"
      :items="jsondata"
      class="elevation-1"
    ></v-data-table>
  </v-card>
  </v-container>
    
  </template>
<script>
  export default {
    props:['jsondata','headers'],
    data: () => ({
    }),
  }
</script>
<style>
  .v-data-table-header {
  background-color: #dcdcdc;
}
.v-data-table-header th {
  white-space: pre;
}
td{
  white-space: nowrap;
}
</style>