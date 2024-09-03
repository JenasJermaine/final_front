<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <form @submit.prevent="submitHouse">
      <v-container>
        <v-text style="margin-left: 24px">House Location:</v-text>
        <v-card
          class="bg-grey-lighten-2 rounded-xl ma-8 pa-1"
          variant="outlined"
        >
          <v-container
            style="display: flex; flex-direction: column; align-items: center"
          >
            <select
              v-model="house.county"
              name="county"
              class="select"
              id="county"
            >
              <option value="" disabled>Select a County</option>
              <option value="Machakos">Machakos</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Kiambu">Kiambu</option>
            </select>
            <input
              v-model="house.coordinates"
              class="input"
              name="coordinates"
              type="text"
              placeholder="Google Maps Co-ordinates"
            />
          </v-container>
        </v-card>

        <v-text class="text-center" style="margin-left: 24px">
          The map below should show the accurate location of your home:
        </v-text>
      </v-container>

      <v-container style="text-align: center; margin-left: 20px">
        <v-text>House details</v-text>
      </v-container>

      <v-container>
        <v-text style="margin-left: 24px">House Photos:</v-text>
        <v-card
          class="bg-grey-lighten-2 rounded-xl ma-8 pa-3"
          variant="outlined"
        >
          <v-row dense class="pa-0 ma-0">
            <v-col
              v-for="(image, index) in images"
              :key="index"
              cols="12"
              sm="4"
              md="2"
              class="pa-1"
            >
              <v-card class="rounded-xl" max-width="150" max-height="150">
                <v-img :src="image" height="150" cover></v-img>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" v-if="images.length === 0">
              <v-card
                class="rounded-xl d-flex align-center justify-center ma-0"
                max-width="150"
                height="150"
              >
                <v-icon large icon="fas fa-plus"></v-icon>
              </v-card>
            </v-col>
          </v-row>
        </v-card>

        <v-container class="d-flex flex-column align-center justify-center">
          <v-btn
            prepend-icon="fas fa-camera"
            class="bg-black"
            rounded="xl"
            size="large"
            @click="triggerFileInput"
          >
            Add photos
          </v-btn>
        </v-container>

        <input
          type="file"
          ref="fileInput"
          style="display: none"
          @change="onFileSelected"
          accept="image/*"
          multiple
        />
      </v-container>

      <v-container>
        <v-text style="margin-left: 24px">About house:</v-text>
        <v-card
          class="bg-grey-lighten-2 rounded-xl ma-10 pa-1"
          variant="outlined"
        >
          <v-container>
            <v-row>
              <v-col>
                <select
                  name="homeType"
                  class="select"
                  id="homeType"
                  v-model="house.homeType"
                >
                  <option value="" disabled>Select a home type</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Mansion">Mansion</option>
                  <option value="Apartment">Apartment</option>
                </select>
                <input
                  class="input"
                  name="floors"
                  type="number"
                  placeholder="Number of floors"
                  v-model="house.noFloors"
                />
                <input
                  class="input"
                  name="bedrooms"
                  type="number"
                  placeholder="Number of bedrooms"
                  v-model="house.noBedrooms"
                />
                <input
                  class="input"
                  name="bathrooms"
                  type="number"
                  placeholder="Number of full bathrooms"
                  v-model="house.noFullBathrooms"
                />
                <input
                  class="input"
                  name="width"
                  type="number"
                  placeholder="Max house width (meters)"
                  v-model="house.maxHouseWidth"
                />
              </v-col>
              <v-col>
                <input
                  class="input"
                  name="length"
                  type="number"
                  placeholder="Max house length (meters)"
                  v-model="house.maxHouseLength"
                />
                <input
                  class="input"
                  name="landSize"
                  type="number"
                  placeholder="Size of land (acres)"
                  v-model="house.landSize"
                />
                <input
                  class="input"
                  name="yearBuilt"
                  type="number"
                  placeholder="Year built"
                  v-model="house.yearBuilt"
                />
                <select
                  name="furnished"
                  class="select"
                  id="furnished"
                  v-model="house.furnishedStatus"
                >
                  <option value="" disabled>Furnished or not</option>
                  <option value="Furnished">Furnished</option>
                  <option value="Not Furnished">Not Furnished</option>
                </select>
                <select
                  name="garage"
                  class="select"
                  id="garage"
                  v-model="house.garageType"
                >
                  <option value="" disabled>Select garage type</option>
                  <option value="In building garage">In building garage</option>
                  <option value="Outside garage">Outside garage</option>
                  <option value="No garage">No garage</option>
                </select>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>

      <v-container>
        <v-text style="margin-left: 24px">Set price:</v-text>
        <v-card
          class="bg-grey-lighten-2 rounded-xl ma-8 pa-1"
          variant="outlined"
        >
          <v-container
            style="display: flex; flex-direction: column; align-items: center"
          >
            <select v-model="house.sellType" class="select" id="sellType">
              <option value="" disabled>Select sell type</option>
              <option value="For Rent">For Rent</option>
              <option value="Permanent">Permanent</option>
            </select>
            <input
              class="input"
              name="price"
              type="number"
              :placeholder="pricePlaceholder"
              v-model="house.price"
            />
          </v-container>
        </v-card>
      </v-container>

      <v-container>
        <v-text style="margin-left: 24px">Your contact details:</v-text>
        <v-card
          class="bg-grey-lighten-2 rounded-xl ma-8 pa-1"
          variant="outlined"
        >
          <v-container
            style="display: flex; flex-direction: column; align-items: center"
          >
            <input
              class="input"
              name="email"
              type="email"
              placeholder="Email"
              v-model="house.email"
            />
            <input
              class="input"
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              v-model="house.phoneNumber"
            />
          </v-container>
        </v-card>
      </v-container>

      <v-container class="d-flex flex-column align-center">
        <input class="submit" type="submit" value="Sell" />
      </v-container>
    </form>

    <v-container class="d-flex flex-row justify-center">
      <v-btn
        class="ma-2"
        color="black"
        icon="fas fa-chevron-left"
        to="/Sell"
      ></v-btn>
      <v-spacer style="width: 500px"></v-spacer>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      house: {
        homeType: "",
        noFloors: "",
        noBedrooms: "",
        noFullBathrooms: "",
        maxHouseWidth: "",
        maxHouseLength: "",
        landSize: "",
        yearBuilt: "",
        furnishedStatus: "",
        garageType: "",
        sellType: "",
        price: "",
        email: "",
        phoneNumber: "",
        county: "",
        coordinates: "",
      },
      images: [], 
    };
  },
  computed: {
    pricePlaceholder() {
      return this.house.sellType === "For Rent"
        ? "Rent per month (Ksh.)"
        : "Price (Ksh.)";
    },
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push(e.target.result); 
        };
        reader.readAsDataURL(files[i]);
      }
    },
    async submitHouse() {
      try {
        const formData = new FormData();

        for (const key in this.house) {
          formData.append(key, this.house[key] || ""); 
        }

        for (let i = 0; i < this.images.length; i++) {
          const blob = await fetch(this.images[i]).then((res) => res.blob());
          formData.append("photos[]", blob, `photo_${i}.jpg`);
        }

        await axios.post("http://127.0.0.1:8000/api/house", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert("House details submitted successfully!");
      } catch (error) {
        console.error("Error submitting house details:", error);
        alert(
          "There was an error submitting your house details. Please try again."
        );
      }
    },
  },
};
</script>

<style scoped>
.input {
  margin: 10px;
  padding: 25px;
  width: 250px;
  border-style: solid;
  border-radius: 25px;
  height: 50px;
  background-color: #f5f5f5cc;
}
.submit {
  color: aliceblue;
  font-weight: bold;
  margin: 10px;
  width: 300px;
  border-style: solid;
  border-radius: 25px;
  height: 50px;
  background-color: #000000;
}
.select {
  margin: 10px;
  padding: 13px; 
  width: 250px;
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
