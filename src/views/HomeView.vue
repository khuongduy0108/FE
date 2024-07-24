<template>
  <v-app>
    <TopBar />
    <v-main>
      <div v-if="this.$route.path ==='/'">
        <TrangChu  />
      </div>
    <div v-else>
      <router-view/>
    </div>
    </v-main>
    <FootBar />
  </v-app>
</template>

<script>
import TopBar from '@/components/Client/TopBar.vue';
import FootBar from '@/components/Client/FootBar.vue';
import TrangChu from '@/views/KhachHang/TrangChu.vue';
export default {
  name: 'App',
  components: {
    TopBar,
    TrangChu,
    FootBar
  },
  data: () => ({

  })
}
</script>

<style>

</style>