<template>
  <v-container>
    <h1>管理页面</h1>

    <StoneSettingList />

    <div class="text-center">
      <Addstone />
    </div>
  </v-container>
</template>

<script>
import Addstone from "../../components/Addstone.vue";
import StoneSettingList from "../../components/Stone_Setting_list.vue";
export default {
  name: "Stones",
  components: {
    Addstone,
    StoneSettingList,
  },
};
</script>
