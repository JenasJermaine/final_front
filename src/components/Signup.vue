<style scoped>
.input {
  margin: 10px;
  padding: 25px;
  width: 300px;
  border-style: solid;
  border-radius: 25px;
  height: 50px;
  background-color: #f5f5f5cc;
}

.submit {
  font-weight: bold;
  margin: 10px;
  width: 300px;
  border-style: solid;
  border-radius: 25px;
  height: 50px;
  background-color: #000000;
}
</style>
<template>
  <v-sheet
    style="display: flex; flex-direction: column; align-items: center"
    class="h-100 bg-grey-lighten-2"
  >
    <v-card
      style="height: 800px; width: 400px"
      title="Home it"
      variant="elevated"
      class="rounded-xl ma-12 text-center"
    >
      <form @submit.prevent="saveData">
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
              v-if="userPic"
              :src="userPic"
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
            class="bg-black mb-6"
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
        <input
          class="input"
          name="userName"
          v-model="user.name"
          type="text"
          placeholder="User Name"
        />
        <input
          class="input"
          name="email"
          v-model="user.email"
          type="email"
          placeholder="Email"
        />
        <input
          class="input"
          name="password"
          v-model="user.password"
          type="password"
          placeholder="Password"
        />
        <input
          class="input"
          name="password_confirmation"
          v-model="user.password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
        <input
          class="submit"
          value="Sign Up"
          style="color: aliceblue"
          type="submit"
        />
      </form>
    </v-card>
  </v-sheet>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      userPic: null,
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
        this.userPic = URL.createObjectURL(file);
        this.user.user_pic = file;
      }
    },
    saveData() {
      const formData = new FormData();
      formData.append("name", this.user.name);
      formData.append("email", this.user.email);
      formData.append("password", this.user.password);
      formData.append("password_confirmation", this.user.password_confirmation);

      if (this.user.user_pic) {
        formData.append("user_pic", this.user.user_pic);
      }

      axios
        .post("http://127.0.0.1:8000/api/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          console.log(data);
          alert("Saved successfully!");
        })
        .catch((err) => {
          console.error("Error response:", err.response);
          if (err.response.data && err.response.data.errors) {
            let errors = err.response.data.errors;
            alert("Validation errors: " + JSON.stringify(errors));
          } else {
            alert("Failed to save data.");
          }
        });
    },
  },
};
</script>
