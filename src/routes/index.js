import { createRouter, createWebHistory } from "vue-router";

import Signup from "./../components/Signup.vue";
import Login from "./../components/Login.vue";
import Sell from "./../components/Sell.vue";
import Buy from "./../components/Buy.vue";
import Myaccount from "./../components/Myaccount.vue";
import Accountsettings from "../components/Accountsettings.vue";
import Agents from "../components/Agents.vue";
import Selectedagent from "../components/Selectedagent.vue";
import Selectedhouse from "../components/Selectedhouse.vue";
import Agentprofile from "../components/Agentprofile.vue";
import House from "../components/House.vue";

const routes = [
  {
    path: "/Myaccount",
    name: "Myaccount",
    component: Myaccount,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Accountsettings",
    name: "Accountsettings",
    component: Accountsettings,
  },
  {
    path: "/Sell",
    name: "Sell",
    component: Sell,
  },
  {
    path: "/Agents",
    name: "Agents",
    component: Agents,
  },
  {
    path: "/Selectedagent/:id",
    name: "Selectedagent",
    component: Selectedagent,
  },
  {
    path: "/Selectedhouse/:id",
    name: "Selectedhouse",
    component: Selectedhouse,
  },
  {
    path: "/Agentprofile",
    name: "Agentprofile",
    component: Agentprofile,
  },
  {
    path: "/House",
    name: "House",
    component: House,
  },
  {
    path: "/Buy",
    name: "Buy",
    component: Buy,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
