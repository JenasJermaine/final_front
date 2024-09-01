<template>
<div style="display: flex; flex-direction: column; align-items: center"
>
    <v-avatar
      :image="`http://127.0.0.1:8000/storage/${Agent.profile_pic}`"
      size="100"
    ></v-avatar>
    <p class="mt-3">{{ Agent.first_and_second_name }}</p>
    <p class="mt-3">Successful Sales: {{ Agent.successful_sales }}</p>
    <p class="mt-1"
      >Commission Rate(%) : {{ Agent.commission_rate }}</p>
    <p class="mt-4">Email Address: {{ Agent.email }}</p>
    <p class="mb-4">Phone Number: {{ Agent.phone_number }}</p>
</div>
  <p style="text-align: center">
    Fill in your contact details below so that the agent above will be able to
    contact you:
  </p>
    <v-card style="display: flex; flex-direction: column; align-items: center" class="bg-grey-lighten-2 rounded-xl ma-8 pa-1" variant="outlined">
       
      
        <input class="input" name="email" type="email" placeholder="Email" />
        <input
          class="input"
          name="phoneNumber"
          type="number"
          placeholder="Phone Number"
        />
    </v-card>
    <div
    style="display: flex; flex-direction: column; align-items: center"
  >
    <input class="submit" style="color: aliceblue" type="submit" />
  <p style="text-align: center">
    Your selected agent should contact you within an hour. Feel free to also
    contact them using their contact details they have provided.
  </p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Agent:{},
    };
  },
  computed: {
    agentId() {
      return this.$route.params.id;
    },
  },
  created() {
    this.fetchAgent();
  },
  methods: {
    fetchAgent() {
      axios
        .get(`http://127.0.0.1:8000/api/agent/${this.agentId}`)
        .then((response) => {
          this.Agent = response.data;
        })
        .catch((error) => {
          console.error("There was an error fetching the agent data!", error);
        });
    },
  },
};
</script>
<style scoped>
.input {
  margin: 10px;
  padding: 25px;
  width: 250px;
  border-style: solid;
  border-radius: 25px;
  height: 50px;
  background-color: #f5f5f5cc;
}
.submit {
  font-weight: bold;
  margin: 5px;
  margin-top: 0px;
  width: 300px;
  border-style: solid;
  border-radius: 25px;
  height: 50px;
  background-color: #000000;
}
</style>
