<template>
  <v-app>
      <Navbar/>
    <v-main>
      <v-container fluid>
        
        <router-view></router-view>
      </v-container>
    </v-main>
 <Footer/> 
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
export default {
  components: { 
    Navbar,
    Footer
  },
  name: 'App',
  plugins:{
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
