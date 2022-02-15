<template>
  <v-container>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-container>
        <h1>上传新资料</h1>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" label="展示物名称"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="img_url"
              label="展示物图片链接"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="info" label="展示物信息"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="link" label="展示物链接"></v-text-field>
          </v-col>
        </v-row>
        <v-center>
            <v-btn color="primary" @click="submit(name, img_url, info, link)"
          >上传</v-btn>
        </v-center>
      
        
      </v-container>
    </v-form>
  </v-container>
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