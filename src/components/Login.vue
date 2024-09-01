<template>
  <v-sheet
    style="display: flex; flex-direction: column; align-items: center"
    class="h-100 bg-grey-lighten-2"
  >
    <v-card
      style="height: 600px; width: 400px"
      title="Home it"
      variant="elevated"
      class="rounded-xl ma-12 text-center"
    >
      <form @submit.prevent="LoginData">
        <input 
          class="input" 
          name="email" 
          type="email" 
          v-model="user.email"
          placeholder="Email" 
        />
        <input
          class="input"
          name="password"
          type="password"
          v-model="user.password"
          placeholder="Password"
        />
        <input 
          class="submit" 
          value="Sign In"
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
  name: "Signin",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
  LoginData() {
    axios
      .post("http://127.0.0.1:8000/api/login", this.user)
      .then(({ data }) => {
        if (data.status) {
          alert("Your sign-in was successful");
          console.log("About to navigate to home");
          this.$router.push({ name: 'Myaccount' });
          console.log("Navigation completed");
        } else {
          alert("Sign-in failed: " + data.message);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.error('Server response error:', err.response.data);
          alert("Error: " + err.response.data.message);
        } else if (err.request) {
          console.error('No response received:', err.request);
          alert("No response from the server. Please try again later.");
        } else {
          console.error('Error in request setup:', err.message);
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

