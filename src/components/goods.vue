<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="this.img_src"></v-img>

    <v-card-title> {{ name }} </v-card-title>

    <v-card-text>
      <div>
        {{ tradtion }}
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
</template>

<script>
export default {
  data: () => ({
    name: "What Stone?",
    img_src: "https://s3.bmp.ovh/imgs/2022/01/aad8f7a0bd171bb3.jpg",
    tradtion:
      "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>