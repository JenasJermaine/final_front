<template>
  <v-container fluid>
    <v-row class="justify-start">
      <v-col cols="12" md="6">
        <v-text>Choose your county:</v-text>
        <select v-model="selectedCounty" name="county" class="select" id="county">
          <option value="" disabled selected>Select a County</option>
          <option value="Machakos">Machakos</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kiambu">Kiambu</option>
        </select>
      </v-col>
    </v-row>
    <v-text>Choose your preferred agent:</v-text>
    <v-row class="justify-start">
      <v-col cols="12" sm="6" lg="3" v-for="agent in filteredAgents" :key="agent.id">
        <v-card class="rounded-xl mt-3" max-width="400">
          <v-img
            height="250"
            :src="`http://127.0.0.1:8000/storage/${agent.profile_pic}`"
            cover
          ></v-img>
          <v-card-item>
            <v-card-title>Agent Name: {{ agent.first_and_second_name }}</v-card-title>
          </v-card-item>
          <v-card-text>
            <div>Agent's commission rate(%): {{ agent.commission_rate }}</div>
            <div>Total successful sales: {{ agent.successful_sales }}</div>
            <div>County of Operations: {{ agent.county }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn block class="bg-black" rounded="xl" :to="{ name: 'Selectedagent', params: { id: agent.id } }">View more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      agents: [], 
      selectedCounty: "",
    };
  },
  computed: {
    filteredAgents() {
      if (this.selectedCounty === "") {
        return this.agents; 
      }
      return this.agents.filter(agent => agent.county === this.selectedCounty);
    },
  },
  created() {
    this.fetchAgents();
  },
  methods: {
    fetchAgents() {
      axios
        .get("http://127.0.0.1:8000/api/postedagent")
        .then((response) => {
          this.agents = response.data;
        })
        .catch((error) => {
          console.error("There was an error fetching the agent data!", error);
        });
    },
  },
};
</script>


<style scoped>
.select {
  margin: 10px;
  padding: 13px; 
  width: 250px;
  border: 2px solid #747474; 
  border-radius: 25px;
  height: 50px; 
  background-color: #f5f5f5cc;
  color: #747474;
  font-size: 16px; 
}
select option:disabled {
  display: none;
}

</style>