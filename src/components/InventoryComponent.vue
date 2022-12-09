<template>
  <div>
    <v-app>
      <v-container>
        <v-row align="center">
          <v-col>
            <v-select
              :items="[{ text: ALL, value: empty }, ...inventoryDataCatalogue]"
              v-model="catalogValue"
              label="Catalogue"
              dense
              solo
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="categoryValue"
              :items="[{ text: ALL, value: empty }, ...inventoryDataCategory]"
              label="Category"
              dense
              solo
            ></v-select>
          </v-col>
          <v-col>
            <v-btn class="mb-6" color="primary" @click="filtered()"
              >Filter<v-icon small>mdi-filter</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <TableComponentVue :jsondata="filteredData" :headers="headers" />
      </v-container>
    </v-app>
  </div>
</template>
<script>
import TableComponentVue from "./TableComponent.vue";
export default {
  components: {
    TableComponentVue,
  },
  mounted() {
    let result = this.dataJson.map(({ Catalog }) => Catalog);
    let uniqueData = [...new Set(result)];
    this.inventoryDataCatalogue = uniqueData;
    console.log(this.inventoryData);
    result = this.dataJson.map(({ Category }) => Category);
    uniqueData = [...new Set(result)];
    this.inventoryDataCategory = uniqueData;
  },
  name: "InventoryComponent",
  props: ["json"],
  computed: {
    values() {
      return this.filteredData;
    },
  },
  data() {
    return {
      className: "",
      dataJson: this.json,
      inventoryDataCatalogue: [],
      inventoryDataCategory: [],
      categoryValue: "",
      catalogValue: "",
      empty: "",
      ALL: "All",
      filteredData: this.json,
      headers: [
        {
          text: "Product Name",
          align: "start",
          sortable: false,
          value: "Product Name",
        },
        { text: "SKU", value: "SKU" },
        { text: "Available On Hand", value: "Available On Hand" },
        { text: "Reserved", value: "Reserved" },
        { text: "Safety Buffer", value: "Safety Buffer" },
        { text: "Catalog", value: "Catalog" },
        { text: "Category", value: "Category" },
      ],
    };
  },
  methods: {
    filtered() {
      console.log("this.categoryValue " + this.categoryValue);
      let category = this.categoryValue;
      let catalogue = this.catalogValue;
      let newArray = this.dataJson.filter(function (el) {
        //console.log(el.Category===catalogue);
        if (category == "" && catalogue == "") {
          console.log("here");
          return el;
        } else if (category == "" || catalogue == "") {
          console.log("here");
          return el.Catalog === catalogue || el.Category === category;
        } else {
          return el.Catalog === catalogue && el.Category === category;
        }
      });
      this.filteredData = newArray;
      console.log(newArray);
      //console.log(this.dataJson);
    },
    onChangeCatalog(event) {
      this.catalogValue = event.target.value;
      console.log(this.catalogValue);
    },
    onChangeCategory(event) {
      this.categoryValue = event.target.value;
      console.log(this.categoryValue);
    },
  },
};
</script>
<style>
select {
  appearance: none;
  outline: 0;
  border-radius: 0;
  background-image: none;
  width: 10%;
  padding: 5px;
  color: black;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 3px;
  margin: 0 1%;
}
.widthbtn {
  width: 10%;
}
</style>
