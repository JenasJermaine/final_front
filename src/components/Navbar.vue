<template>
  <v-navigation-drawer expand-on-hover rail permanent>
    <v-list
      density="compact"
      nav
      style="
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <div>
        <v-list-item :prepend-avatar="user.user_pic" to="/"> {{ user.name }}</v-list-item>
        <v-divider class="mb-6"></v-divider>
        <v-list-item prepend-icon="fas fa-money-bill" to="/Sell">Sell</v-list-item>
        <v-list-item prepend-icon="fas fa-shop" to="/Buy">Buy/Rent</v-list-item>
        <v-list-item prepend-icon="fas fa-user-tie" to="/Agentprofile">Be an agent</v-list-item>
      </div>
      <v-menu top>
        <template v-slot:activator="{ props }">
          <v-list-item prepend-icon="fas fa-bars" v-bind="props">More</v-list-item>
        </template>
        <v-list>
          <v-list-item prepend-icon="far fa-circle-question" to="/Help">Help</v-list-item>
          <v-list-item prepend-icon="fas fa-gear" to="/Accountsetting">Account Settings</v-list-item>
          <v-list-item prepend-icon="fas fa-right-from-bracket" to="/Login">Log out</v-list-item>
        </v-list>
      </v-menu>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "",
        user_pic: "",
      },
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user'); // Adjust the URL if needed
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
  },
};
</script>
