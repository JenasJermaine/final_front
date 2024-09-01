<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-text>Homes you have listed for sale:</v-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" lg="3" v-for="house in houses" :key="house.id">
        <v-card
          class="rounded-xl"
          max-width="400"
          style="align-self: flex-start"
        >
          <v-img
            class="align-end text-white"
            height="250"
            :src="`http://127.0.0.1:8000/storage/${house.photoPaths[0]}`"
            cover
          >
          </v-img>
          <v-card-title class="pt-4">
            <div>Price: {{ house.price }}</div>
            <div>County: {{ house.county }}</div>
            <div>House Type: {{ house.homeType }}</div>
            <div>Number of Bedrooms: {{ house.noBedrooms }}</div>
          </v-card-title>
          <v-card-actions>
            <v-container class="d-flex flex-row justify-start">
              <v-btn block class="bg-black" rounded="xl">Manage</v-btn>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      houses: [],
    };
  },
  created() {
    this.fetchHouses();
  },
  methods: {
    fetchHouses() {
      axios
        .get("http://127.0.0.1:8000/api/postedhouse")
        .then((response) => {
          this.houses = response.data;
        })
        .catch((error) => {
          console.error("There was an error fetching the house data!", error);
        });
    },
  },
};
</script>
