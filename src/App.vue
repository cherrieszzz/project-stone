<template>
  <v-app>
      <Navbar/>
    <v-main>
      <v-container fluid>
        
        <router-view></router-view>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { 
    Navbar
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
