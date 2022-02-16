<template>
  <div>
    <v-flex v-for="stone in stones" :key="stone._id">
      <v-card class="mx-auto my-2" outlined>
        <v-card-text>
          <v-row justify="space-around">
            <v-avatar>
              <v-img
                :src="stone.img_url"
                style="border-radius: 50%; height: 2.5rem; width: 2.5rem"
              ></v-img>
            </v-avatar>

            <strong class="mx-4 info--text text--darken-2">
              {{ stone.name }}
            </strong>

            <v-spacer></v-spacer>

            <div class="text-right">
              <v-btn class="mx-1" icon depressed @click="DeleteFunc()">
                <v-icon> mdi-delete </v-icon>
              </v-btn>

              <v-btn class="mx-1" icon depressed>
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Stones",
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
        id: this.stone._id,
      });
    },
  },
};
</script>


