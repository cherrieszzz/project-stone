<template>
    <nav>
    <v-navigation-drawer app touchless v-model="drawer_open">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Course+
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app v-model="this.$vuetify.breakpoint.mdAndDown" color="primary" dark>
        <v-app-bar-nav-icon @click="drawer_open = !drawer_open"/>
      <v-toolbar-title class="headline" >
        <span>Course+</span>
      </v-toolbar-title>
    </v-app-bar>
    
    </nav>



  
    


</template>

<script>
  export default {
    name:'Navbar',
    
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard',to: '/' },
          { title: 'Photos', icon: 'mdi-image',to:'/pdf' },
          { title: 'About', icon: 'mdi-help-box',to:'/About' },
        ],
        right: null,
        drawer_open: null
      }
    },
  }
</script>