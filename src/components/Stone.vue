<template>
  <v-row justify="space-around">
    <v-col >
      <v-dialog transition="dialog-top-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <button  v-bind="attrs" v-on="on" class="text-right">
            <v-img
              :src="img_src"
              class="asd text-right"
              style="border-radius: 50%; height: 5rem; width: 5rem"
            ></v-img>
          </button>
        </template>
        <template>
          <v-card>
            <v-toolbar color="primary" dark>Stone Information</v-toolbar>

            <v-img
              :src="img_src"
              style="height: 5rem; width: 5rem"
              class="text-left animate__animated animate__bounce animate__infinite"
              alt=""
            ></v-img>

            <v-card-text class="text-right">
              <div class="text-h4">{{ name }}</div>
              {{ tradtion }}
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    name: "What Stone?",
    img_src: "https://s3.bmp.ovh/imgs/2022/01/aad8f7a0bd171bb3.jpg",
    tradtion:
      "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
  }),
};
</script>

<style scoped>
.asd{
     animation: lb 15s linear infinite;
}

.asd:hover{
    animation-play-state: paused;
}
 @keyframes lb {
            form {
                transform: translateX(0);
            }

            to {
                transform: translateX(1800px);
                /*只需要移动6张图的距离，这时显示的是最后一张图，而最后一张图和第一张图是一样的，造成一种循环的假象*/
            }
        }
</style>