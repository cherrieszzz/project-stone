<template>
  <v-container>
    <v-row>
      <v-col v-for="stone in stones" :key="stone._id" cols="12" sm="4">
        <v-card :loading="loading" class="" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img :src="stone.img_url" height="250"></v-img>

          <v-card-title> {{ stone.name }} </v-card-title>

          <v-card-text>
            <div>
              {{ stone.info }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Buy now？</v-card-title>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
             购买
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
  },
};
</script>