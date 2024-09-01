<template>
  <v-text style="margin-left: 24px">Set up Agent profile:</v-text>
  <v-container style="display: flex; flex-direction: column; align-items: center">
    <v-card
      class="bg-grey-lighten-2 rounded-circle mt-8  d-flex align-center justify-center ma-0"
      variant="outlined"
      width="150"
      height="150"
    >
      <v-img v-if="profilePic" :src="profilePic" class="rounded-circle"
      height="150" cover></v-img>
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

  <v-container class="d-flex flex-column align-center">
    <input class="submit" type="submit" value="Finish" />
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