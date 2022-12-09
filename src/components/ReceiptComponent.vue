<template>
    <v-app>
      <v-container>
        <TableComponentVue :jsondata="dataJson" :headers="headers" />
      </v-container>
    </v-app>
</template>
<script>
import TableComponentVue from "./TableComponent.vue";
import ReceiptJson from '../models/receipt.json';
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
  data() {
    return {
      className: "",
      dataJson: ReceiptJson,
      inventoryDataCatalogue: [],
      inventoryDataCategory: [],
      categoryValue: "",
      catalogValue: "",
      empty: "",
      ALL: "All",
      filteredData: this.json,
      headers: [
        {
          text: 'Date',
          align: 'start',
          sortable: false,
          value: 'Date',
        },
        { text: 'Bill ID', value: 'Bill ID' },
        { text: 'Customer Name', value: 'Customer Name' },
        { text: 'Store Code', value: 'Store Code' },
        { text: 'Store Name', value: 'Store Name' },
        { text: 'Net Total', value: 'Net Total' },
        { text: 'Payment mode', value: 'Payment mode' },
        { text: 'Zone', value: 'Zone' },
        { text: 'State', value: 'State' },
        { text: 'City', value: 'City' },
        { text: 'Verified', value: 'Verified' },
        { text: 'Discount Amount', value: 'Discount Amount' },
        { text: 'Quantity', value: 'Quantity' }
      ],
    };
  },
  methods: {
    // onChildInit(){
    //     let result = this.dataJson.map(({ Catalog }) => Catalog)
    //     let uniqueData = [...new Set(result)];
    //     this.inventoryData = uniqueData;
    //   console.log(this.inventoryData);
    // }
  },
};
</script>
