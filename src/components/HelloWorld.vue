<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <button color="primary" v-bind="attrs" v-on="on">
            <img
              src="https://s3.bmp.ovh/imgs/2022/01/aad8f7a0bd171bb3.jpg"
              style="height: 3rem; board-radius: 10px"
              class="animate__animated animate__bounce animate__infinite"
              alt=""
            />
          </button>
        </template>
        <template>
          <v-card>
            <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>
            <img
              src="https://s3.bmp.ovh/imgs/2022/01/aad8f7a0bd171bb3.jpg"
              style="height: 5rem"
              class="animate__animated animate__bounce animate__infinite"
              alt=""
            />
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
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
</script>
