<template>
  <select name="county" class="select" id="county" v-model="filters.county">
    <option value="" disabled selected>Select a County</option>
    <option value="Machakos">Machakos</option>
    <option value="Nairobi">Nairobi</option>
    <option value="Mombasa">Mombasa</option>
    <option value="Kiambu">Kiambu</option>
  </select>

  <select name="sellType" class="select" id="sellType" v-model="filters.sellType">
    <option value="" disabled>Select sell type</option>
    <option value="Permanent">Permanent</option>
    <option value="For Rent">For Rent</option>
  </select>

  <input class="input" name="price" type="number" placeholder="Price" v-model.number="filters.price" />

  <select name="homeType" class="select" id="homeType" v-model="filters.homeType">
    <option value="" disabled selected>Select a home type</option>
    <option value="Bungalow">Bungalow</option>
    <option value="Mansion">Mansion</option>
    <option value="Apartment">Apartment</option>
  </select>

  <input class="input" name="bedrooms" type="number" placeholder="Bedrooms number" v-model.number="filters.bedrooms" />

  <v-btn class="ma-2" color="black" icon="fas fa-magnifying-glass" @click="filterHouses"></v-btn>

  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-text>Available houses:</v-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" lg="3" v-for="house in filteredHouses" :key="house.id">
        <v-card class="rounded-xl" max-width="400" style="align-self: flex-start">
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
              <v-btn block class="bg-black" rounded="xl" :to="{ name: 'Selectedhouse', params: { id: house.id } }">More</v-btn>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.input {
  margin: 10px;
  padding: 25px;
  width: 200px;
  border-style: solid;
  border-radius: 25px;
  height: 50px;
  background-color: #f5f5f5cc;
}
.select {
  margin: 10px;
  padding: 13px;
  width: 200px;
  border: 2px solid #747474;
  border-radius: 25px;
  height: 50px;
  background-color: #f5f5f5cc;
  color: #747474;
  font-size: 16px;
}
select option:disabled {
  display: none;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      houses: [],
      filters: {
        county: "",
        sellType: "",
        price: null,
        homeType: "",
        bedrooms: null,
      },
      filteredHouses: [],
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
          this.filteredHouses = this.houses;
        })
        .catch((error) => {
          console.error("There was an error fetching the house data!", error);
        });
    },
    filterHouses() {
      this.filteredHouses = this.houses.filter((house) => {
        return (
          (this.filters.county === "" || house.county === this.filters.county) &&
          (this.filters.sellType === "" || house.sellType === this.filters.sellType) &&
          (this.filters.price === null || house.price <= this.filters.price) &&
          (this.filters.homeType === "" || house.homeType === this.filters.homeType) &&
          (this.filters.bedrooms === null || house.noBedrooms === this.filters.bedrooms)
        );
      });
    },
  },
};
</script>
