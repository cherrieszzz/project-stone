<template>
<v-container>
  <v-flex xs4 v-for="stone in stones" :key="stone._id">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="stone.img_src"></v-img>

    <v-card-title> {{ stone.name }} </v-card-title>

    <v-card-text>
      <div>
        {{ stone.info }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Buy now?</v-card-title>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>
</v-container>
</template>

<script>
import axios from 'axios';
export default {
  name:'Stones',
  data(){
    return{
      stones:[]
    };
  },
  mounted(){
    this.fetchStones();
  },

  methods: {
   async fetchStones(){
     return axios({
       method:'get',
       url:'http://localhost;8081/stones',
     })
     .then((response) =>{
       this.stones = response.data.stones;
     })
     .catch(() =>{
     });
   }
  },
};
</script>