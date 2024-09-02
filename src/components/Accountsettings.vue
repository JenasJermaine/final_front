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
          name="userName"
          type="text"
          placeholder="User Name"
        />
        <v-text style="margin-left: 24px">Change Email:</v-text>
        <input class="input" name="email" type="email" placeholder="Email" />
      </v-container>
    </v-card>
    <v-container
      style="display: flex; flex-direction: column; align-items: center"
    >
      <input
        class="submit"
        value="Apply Changes"
        style="color: aliceblue"
        type="submit"
      />
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      profilePic: null,
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
