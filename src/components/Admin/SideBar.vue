<template>
  <v-navigation-drawer color="#98D0B9">
    <v-toolbar color="#98D0B9">
      <v-icon class="ml-2">mdi-home</v-icon>
      <v-toolbar-title class="mx-2 custom-title" >BOOKING HOTEL</v-toolbar-title>
    </v-toolbar>
    <v-list density="compact">
      <v-list-subheader>HOTEL</v-list-subheader>

      <router-link :to="'/admin/Dasbroad'" class="custom-link">
        <v-list-item :class="{ 'active-link': $route.path === '/admin/Dasbroad' }" color="#0099FF">
          <template v-slot:prepend>
            <v-icon :icon="links[0].icon"></v-icon>
          </template>
          {{ links[0].text }}
        </v-list-item>
      </router-link>

      <router-link :to="'/admin/KhachHangView'" class="custom-link">
        <v-list-item :class="{ 'active-link': $route.path === '/admin/KhachHangView' }" color="#0099FF">
          <template v-slot:prepend>
            <v-icon :icon="links[1].icon"></v-icon>
          </template>
          {{ links[1].text }}
        </v-list-item>
      </router-link>

      <router-link :to="'/admin/KhachSanView'" class="custom-link">
        <v-list-item :class="{ 'active-link': $route.path === '/admin/KhachSanView' }" color="#0099FF">
          <template v-slot:prepend>
            <v-icon :icon="links[2].icon"></v-icon>
          </template>
          {{ links[2].text }}
        </v-list-item>
      </router-link>

      <router-link :to="'/admin/LoaiPhongView'" class="custom-link">
        <v-list-item :class="{ 'active-link': $route.path === '/admin/LoaiPhongView' }" color="#0099FF">
          <template v-slot:prepend>
            <v-icon :icon="links[3].icon"></v-icon>
          </template>
          {{ links[3].text }}
        </v-list-item>
      </router-link>

      <router-link :to="'/admin/PhongView'" class="custom-link">
        <v-list-item :class="{ 'active-link': $route.path === '/admin/PhongView' }" color="#0099FF">
          <template v-slot:prepend>
            <v-icon :icon="links[4].icon"></v-icon>
          </template>
          {{ links[4].text }}
        </v-list-item>
      </router-link>

      <router-link :to="'/admin/DatPhongView'" class="custom-link">
        <v-list-item :class="{ 'active-link': $route.path === '/admin/DatPhongView' }" color="#0099FF">
          <template v-slot:prepend>
            <v-icon :icon="links[5].icon"></v-icon>
          </template>
          {{ links[5].text }}
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      links: [
        { icon: "mdi-microsoft", text: "Dasbroad" },
        { icon: "mdi-face-agent", text: "KHÁCH HÀNG" },
        { icon: "mdi-calendar", text: "Khách Sạn" },
        { icon: "mdi-chat", text: "Loại Phòng" },
        { icon: "mdi-flask", text: "Phòng" },
        { icon: "mdi-human-dolly", text: "Đặt Phòng" },
      ],
    };
  },
};
</script>

<style>
/* Add your styles here if needed */
</style>
