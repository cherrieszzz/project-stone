<template>
  <v-app>
    <v-container>
      <Navbar />
    </v-container>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  name: "App",
  plugins: {},
  data: () => ({
    //
  }),
};
</script>
