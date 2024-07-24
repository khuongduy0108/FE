<template>
  <v-footer class="text-center d-flex flex-column htt3" color="#98D0B9">
    <v-container grid-list-xs>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
    </v-container>
    <v-divider></v-divider>
    <div><strong style="color: rgb(3, 3, 3);">2023 - Booking Hotel by Vũ Duy Khương</strong></div>
  </v-footer>
</template>

<script>
export default {
  props: {},
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram', 'mdi-youtube', 'mdi-netflix'],
  }),
}
</script>

<style lang="css">
.htt3 {
  padding-top: 10px;
  margin-top: 50px;
}
</style>
