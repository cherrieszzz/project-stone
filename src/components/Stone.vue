<template>
  <div class="stone">
    <v-flex v-for="stone in stones" :key="stone._id">
      <div>
        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <button v-bind="attrs" v-on="on" class="text-right">
              <v-img
                :src="stone.img_url"
                class="stone-anime text-right"
                style="border-radius: 50%; height: 5rem; width: 5rem"
              ></v-img>
            </button>
          </template>

          <template>
            <v-card>
              <v-card-title class="text-h5 lighten-2"> 商品信息 </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-img
                      :src="stone.img_url"
                      style="height: 10rem; width: 7rem"
                      class="text-left"
                      alt=""
                    ></v-img>
                  </v-col>

                  <v-col>
                    <div class="text-h4">{{ stone.name }}</div>
                    {{ stone.info }}
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider></v-divider>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    stones: [],
  }),
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

<style scoped>
.stone-anime {
  animation: lb 15s linear infinite;
}

.stone-anime:hover {
  animation-play-state: paused;
}

@keyframes lb {
  form {
    transform: translateX(0);
  }

  to {
    transform: translateX(1000px);
  }
}
</style>