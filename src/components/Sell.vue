<template>
  
  <v-row
    justify="center"
    class="my-4"
  >
    <v-col cols="12" sm="6" md="4" lg="3">
      <v-card
        class="d-flex flex-column align-center justify-center bg-grey-lighten-2 rounded-xl"
        variant="outlined"
        to="/Agents"
      >
        <v-icon size="50" icon="fas fa-handshake"></v-icon>
        <p class="mt-2">Sell with an agent</p>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3">
      <v-card
        class="d-flex flex-column align-center justify-center bg-grey-lighten-2 rounded-xl"
        variant="outlined"
        to="/House"
      >
        <v-icon size="50" icon="fas fa-person"></v-icon>
        <p class="mt-2">Sell by yourself</p>
      </v-card>
    </v-col>
  </v-row> 
  <v-row
    justify="center"
    class="my-4"
  >
    <v-col cols="12" sm="6" md="4" lg="3">
        <p style="text-align: center;" class="mt-2 d-flex flex-column align-center justify-cente">Get into contact with a professional real estate agent who will walk with you the entire procces as you try to sell your home</p>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3">
        <p  style="text-align: center;" class="mt-2 d-flex flex-column align-center justify-cente">Fill in the details about your Home and home it will help you look for a suitable buyer for your lovely </p>
    </v-col>
  </v-row>   
</template>


<style scoped>
.v-card {
  height: 100%;
  min-height: 300px;
}
</style>
<script>
export default {};
</script>
