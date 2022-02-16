<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title> 系统登录 </v-card-title>
        <v-card-text>
          <div>
            <v-row>
              <!--登录框居中-->
              <v-col>
                <div id="input">
                  <v-row :gutter="10">
                    <v-col>
                      <v-text-field
                        placeholder="请输入用户名"
                        v-model="username"
                        :maxlength="20"
                        clearable
                        prefix-icon="el-icon-s-custom"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <br />
                  <v-row :gutter="10">
                    <v-col>
                      <v-text-field
                        placeholder="请输入密码"
                        v-model="password"
                        show-password
                        prefix-icon="el-icon-lock"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="primary" @click="LoginFunc(username, password)"
            >登录</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    LoginFunc(username, password) {
      console.log("loginfunc running");
      if ((username, password)) {
        // 全局修改axios默认配置
        axios.defaults.baseURL = "http://127.0.0.1:8081";
        this.$axios
          .post("/admin/login/doLogin", {
            username: username,
            password: password,
          })
          .then(() => {
            this.$swal("Great!", "登录成功!", "success");
            this.$router.push({ name: "Admin" });
          })
          .catch((error) => {
            const message = error.response.data.message;
            this.$swal("Oh oo!", `${message}`, "error");
          });
      } else {
        this.$swal("错误!", "用户名或密码不能为空！", "error");
      }
    },
  },
};
</script>

<style scoped>
</style>
