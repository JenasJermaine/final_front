<template>
  <v-container fluid>
    <v-card
      class="rounded-xl pa-4 mb-4 "
      variant="outlined"
      elevation="2"
    >
      <v-text style="text-align: center">
        If you are interested in buying/renting this apartment above, please feel
        free to contact the owner using the contact details provided below.
      </v-text>
    </v-card>
    <!-- Owner's Contact Details -->
    <v-card
      class="rounded-xl pa-4 bg-grey-lighten-2"
      variant="outlined"
      elevation="2"
    >
      <v-text class="text-h6">Owner's Contact Details:</v-text>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12">
          <v-text>Email Address: {{ House.email }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Phone Number: {{ House.phoneNumber }}</v-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- House Photos -->
    <v-card
      class="rounded-xl pa-4 mt-4 bg-grey-lighten-2"
      variant="outlined"
      elevation="2"
    >
      <v-text class="text-h6">House Photos:</v-text>
      <v-divider class="my-4"></v-divider>
      <v-row dense>
        <v-col
          cols="12"
          sm="4"
          md="2"
          v-for="(photo, index) in House.photoPaths"
          :key="index"
        >
          <v-img
            :src="`http://127.0.0.1:8000/storage/${photo}`"
            height="200"
            width="200"
            cover
            class="rounded-lg"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>

    <!-- More about the House -->
    <v-card
      class="rounded-xl pa-4 mt-4 bg-grey-lighten-2"
      variant="outlined"
      elevation="2"
    >
      <v-text class="text-h6">More about the House:</v-text>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12">
          <v-text>County: {{ House.county }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Type of Home: {{ House.homeType }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Number of Floors: {{ House.noFloors }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Number of Bedrooms: {{ House.noBedrooms }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Number of Full Bathrooms: {{ House.noFullBathrooms }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text
            >Maximum House Width: {{ House.maxHouseWidth }} (meters)</v-text
          >
        </v-col>
        <v-col cols="12">
          <v-text
            >Maximum House Length: {{ House.maxHouseLength }} (meters)</v-text
          >
        </v-col>
        <v-col cols="12">
          <v-text>Land Size: {{ House.landSize }} (acres)</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Year Built: {{ House.yearBuilt }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Furnished Status: {{ House.furnishedStatus }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Garage Type: {{ House.garageType }}</v-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- Pricing -->
    <v-card
      class="rounded-xl pa-4 mt-4 bg-grey-lighten-2"
      variant="outlined"
      elevation="2"
    >
      <v-row>
        <v-col cols="12">
          <v-text class="text-h6">Pricing:</v-text>
        </v-col>
        <v-col cols="12">
          <v-text
            >Note: If type of sale is rent the the price refers to rent per
            month</v-text
          >
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12">
          <v-text>Type of Sale: {{ House.sellType }}</v-text>
        </v-col>
        <v-col cols="12">
          <v-text>Price: Ksh.{{ House.price }}</v-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- Footer Message -->

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      House: {},
    };
  },
  computed: {
    houseId() {
      return this.$route.params.id;
    },
  },
  created() {
    this.fetchHouse();
  },
  methods: {
    fetchHouse() {
      axios
        .get(`http://127.0.0.1:8000/api/house/${this.houseId}`)
        .then((response) => {
          this.House = response.data;
        })
        .catch((error) => {
          console.error("There was an error fetching the house data!", error);
        });
    },
  },
};
</script>
