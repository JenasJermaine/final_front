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
        <v-list-item prepend-icon="fas fa-house" to="/Myaccount"> Home</v-list-item>
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
          <v-list-item prepend-icon="fas fa-gear" to="/Accountsettings">Account Settings</v-list-item>
          <v-list-item prepend-icon="fas fa-right-from-bracket" to="/">Log out</v-list-item>
        </v-list>
      </v-menu>
    </v-list>
  </v-navigation-drawer>
</template>

