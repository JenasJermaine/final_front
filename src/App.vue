<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Navbar v-if="shouldShowNavbar" />
  </v-app>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import Navbar from "./components/Navbar.vue";

const route = useRoute();

const shouldShowNavbar = computed(
  () => route.name !== "Login" && route.name !== "Signup"
);
</script>
