<template>
  <v-text style="margin-left: 24px">Edit Profile:</v-text>
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
      Change Profile Picture
    </v-btn>
    <input
      type="file"
      ref="fileInput"
      style="display: none"
      @change="onFileSelected"
      accept="image/*"
    />
  </v-container>
  <v-container>
      <v-card class="bg-grey-lighten-2 rounded-xl ma-8 pa-1" variant="outlined">
        <v-container
          style="display: flex; flex-direction: column; align-items: center"
        >
          <v-text style="margin-left: 24px">Change Username:</v-text>
          <input
            class="input"
            v-model="userName"
            type="text"
            placeholder="User Name"
          />
          <v-text style="margin-left: 24px">Change Email:</v-text>
          <input class="input" v-model="email" type="email" placeholder="Email" />
        </v-container>
      </v-card>
      <v-container
        style="display: flex; flex-direction: column; align-items: center"
      >
        <input
          class="submit"
          value="Apply Changes"
          style="color: aliceblue"
          type="button"
          @click="updateProfile"
        />
      </v-container>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profilePic: null,
      userName: '',
      email: '',
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
      }
    },
    async updateProfile() {
      const formData = new FormData();
      formData.append('user_pic', this.$refs.fileInput.files[0]);
      formData.append('name', this.userName);
      formData.append('email', this.email);

      try {
        const response = await axios.put('http://127.0.0.1:8000/api/users', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
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
