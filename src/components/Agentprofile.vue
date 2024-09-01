<template>
  <v-text style="margin-left: 24px">Set up Agent profile:</v-text>
  <form @submit.prevent="submitAgentData">
    <v-container
      style="display: flex; flex-direction: column; align-items: center"
    >
      <v-card
        class="bg-grey-lighten-2 rounded-circle mt-8 d-flex align-center justify-center ma-0"
        variant="outlined"
        width="150"
        height="150"
      >
        <v-img
          v-if="profilePic"
          :src="profilePic"
          class="rounded-circle"
          height="150"
          cover
        ></v-img>
        <v-icon v-else large icon="fas fa-plus"></v-icon>
      </v-card>
    </v-container>

    <v-container class="d-flex flex-column align-center justify-center">
      <v-btn
        prepend-icon="fas fa-camera"
        class="bg-black"
        rounded="xl"
        size="large"
        @click="triggerFileInput"
      >
        Add Profile Picture
      </v-btn>
      <input
        type="file"
        ref="fileInput"
        style="display: none"
        @change="onFileSelected"
        accept="image/*"
      />
    </v-container>
    <v-card class="bg-grey-lighten-2 rounded-xl ma-8 pa-1" variant="outlined">
      <v-container
        style="display: flex; flex-direction: column; align-items: center"
      >
        <input
          v-model="form.first_and_second_name"
          class="input"
          name="name"
          type="text"
          placeholder="First and Second name"
        />
        <input
          v-model="form.email"
          class="input"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          v-model="form.phone_number"
          class="input"
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
        />
        <select v-model="form.county" class="select" id="county">
          <option value="" disabled selected>Select County of Residence</option>
          <option value="Machakos">Machakos</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kiambu">Kiambu</option>
        </select>
        <input
          v-model="form.commission_rate"
          class="input"
          name="commisionRate"
          type="number"
          placeholder="Commision rate (%)"
          step="0.01"
        />
        <input
          v-model="form.successful_sales"
          class="input"
          name="successfulSales"
          type="number"
          placeholder="Total Successful Sales"
        />
      </v-container>
    </v-card>
    <v-container class="d-flex flex-column align-center">
      <input class="submit" type="submit" value="Finish" />
    </v-container>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      profilePic: null,
      form: {
        first_and_second_name: "",
        email: "",
        phone_number: "",
        county: "",
        commission_rate: null,
        successful_sales: null,
        profile_pic: null,
      },
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePic = URL.createObjectURL(file);
        this.form.profile_pic = file;
      }
    },
    async submitAgentData() {
      const formData = new FormData();
      for (const key in this.form) {
        formData.append(key, this.form[key]);
      }

      axios
        .post("http://127.0.0.1:8000/api/agent", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          alert("Agent profile created successfully!");
          console.log(data);
        })
        .catch((err) => {
          if (err.response) {
            console.error("Server response error:", err.response.data);
            alert("Error: " + err.response.data.message);
          } else if (err.request) {
            console.error("No response received:", err.request);
            alert("No response from the server. Please try again later.");
          } else {
            console.error("Error in request setup:", err.message);
            alert("Error in request. Please try again.");
          }
        });
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
  padding: 13px; /* Adjust padding to fit height */
  width: 250px;
  border: 2px solid #747474; /* Ensure visibility of the border */
  border-radius: 25px;
  height: 50px; /* Ensure this matches the height of the padding and content */
  background-color: #f5f5f5cc;
  color: #747474;
  font-size: 16px; /* Adjust font size for better readability */
}
select option:disabled {
  display: none;
}
</style>
