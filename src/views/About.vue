<template>
<v-container>
  <div class="row">
  <Goods/>
  <Goods/>
  <Goods/>
  <Goods/>
  <Goods/>
  <Goods/>
</div>
</v-container>

 
 
</template>

<script>
  import Goods from '../components/goods.vue'

  export default {
    name: 'About',

    components: {
      Goods,
    },
  }
</script>
