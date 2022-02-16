<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" class="mx-auto">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <template>
      <v-card>
        <v-card-title class="text-h5 lighten-2"> 添加商品 </v-card-title>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-container>
            <v-text-field v-model="name" label="展示物名称"></v-text-field>

            <v-text-field
              v-model="img_url"
              label="展示物图片链接"
            ></v-text-field>

            <v-text-field v-model="info" label="展示物信息"></v-text-field>

            <v-text-field v-model="link" label="展示物链接"></v-text-field>
          </v-container>
          <v-divider></v-divider>
          <v-card-actions>
              <v-spacer></v-spacer>
            <v-btn color="primary" text @click="submit(name, img_url, info, link)"
              >上传</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "addstone",
  data() {
    return {
      name: "",
      img_url: "",
      info: "",
      link: "",
    };
  },
  methods: {
    submit(name, img_url, info, link) {
      console.log("submit running");
      if ((name, img_url, info, link)) {
        axios.defaults.baseURL = "http://127.0.0.1:8081";
        this.$axios
          .post("/admin/stone/addstone", {
            name: name,
            img_url: img_url,
            info: info,
            link: link,
          })
          .then(() => {
            this.$swal("Great!", "Stone added successfully!", "success");
            this.$router.push({ name: "Admin" });
            this.$refs.form.reset();
          })
          .catch(() => {
            this.$swal("Oh oo!", "Could not add the stone!", "error");
          });
      } else {
        this.$swal("错误!", "信息不能为空!", "error");
      }
    },
  },
};
</script>