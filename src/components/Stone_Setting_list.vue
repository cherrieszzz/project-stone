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
            {{ stone._id }}
            <v-spacer></v-spacer>

            <div class="text-right">
              <v-btn class="mx-1" icon depressed @click="DeleteFunc()">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
              <v-dialog transition="dialog-top-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on" class="mx-auto">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>

                <template>
                  <v-card>
                    <v-card-title class="text-h5 lighten-2">
                      修改商品信息
                    </v-card-title>
                    <v-form v-model="valid" ref="form" lazy-validation>
                      <v-container>
                        <v-text-field
                          v-model="name"
                          label="展示物名称"
                        ></v-text-field>

                        <v-text-field
                          v-model="img_url"
                          label="展示物图片链接"
                        ></v-text-field>

                        <v-text-field
                          v-model="info"
                          label="展示物信息"
                        ></v-text-field>

                        <v-text-field
                          v-model="link"
                          label="展示物链接"
                        ></v-text-field>
                      </v-container>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary"
                          text
                          @click="UpdateFunc()"
                          >确定</v-btn
                        >
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </template>
              </v-dialog>
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
      console.log(this.stone._id);
      axios.defaults.baseURL = "http://127.0.0.1:8081";
      this.$axios.post("/admin/stone/delete", {
        _id: this.stone._id,
      });
    },

    UpdateFunc(){
      //
    }

  },
};
</script>


