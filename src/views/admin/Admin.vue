<template>
  <v-container>
    <h1>管理页面</h1>
    <v-flex v-for="stone in stones" :key="stone._id">
      <v-card class="mx-auto my-2" outlined>
        <v-card-text
          >{{ stone.name }}
          <div class="text-right">
            <v-btn class="mx-1" icon depressed @click="DeleteFunc()">
              <v-icon> mdi-delete </v-icon>
            </v-btn>

            <v-btn class="mx-1" icon depressed>
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>

    <div class="text-center">
      <v-btn icon to="/addstone" class="mx-auto">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Stones",
   components: {
     //
    },
  data() {
    return {
      stones: [],
    };
  },
  mounted() {
    this.fetchStones();
  },

  methods: {
    async fetchStones() {
      return axios({
        method: "get",
        url: "http://localhost:8081/api/stones",
      })
        .then((response) => {
          this.stones = response.data.stones;
        })
        .catch(() => {});
    },
    DeleteFunc() {
      console.log("deletefunc running");
      axios.defaults.baseURL = "http://127.0.0.1:8081";
      this.$axios.post("/admin/stone/delete", {
        id: this.stone.id,
      });
    },
  },
};
</script>
