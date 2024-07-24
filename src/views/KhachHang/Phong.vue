<template>
    <v-app>
      <top-bar />
      <v-main>
        <h1 style="text-align: center; font-size: 54px; color:#98D0B9; font-family:aspect-ratio;">
          ĐẶT PHÒNG NOW!
        </h1>
        <v-container>
          <v-row justify="center">
            <v-col v-for="phong in danhSachPhong" :key="phong.maPhong" cols="12" sm="8" md="6">
              <v-card>
                <v-img v-if="phong.hinhAnhPhong" :src="phong.hinhAnhPhong" height="300" contain></v-img>
                <v-card-title class="text-h5 text-center">{{ phong.soPhong }}</v-card-title>
                <v-card-subtitle class="text-center">Loại Phòng: {{ phong.maLoaiPhong }}</v-card-subtitle>
                <v-card-text class="text-center">Mã Khách Sạn: {{ phong.maKhachSan }}</v-card-text>
  
                <!-- Thêm nút "Đặt phòng" và "Xem phòng" được căn giữa -->
                <div class="text-center">
                <v-container grid-list-xs>
                  <v-btn @click="datPhong(phong.maPhong)" color="#98D0B9" class="mr-4">Đặt phòng</v-btn>
                  <v-btn @click="xemPhong(phong.maPhong)" color="#98D0B9">Xem phòng</v-btn>
                </v-container>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <foot-bar />
    </v-app>
  </template>
  
  <script>
  import axios from "axios";
  import TopBar from "../../components/Client/TopBar.vue";
  import FootBar from "../../components/Client/FootBar.vue";
  
  export default {
    components: { TopBar, FootBar },
    name: "FELienHe",
  
    data() {
      return {
        danhSachPhong: [], // Array to store a list of rooms
      };
    },
  
    mounted() {
      this.fetchDanhSachPhong();
    },
  
    methods: {
      async fetchDanhSachPhong() {
        try {
          const response = await axios.get("https://localhost:44354/api/Phong");
  
          this.danhSachPhong = response.data;
        } catch (error) {
          console.error("Error fetching danhSachPhong:", error);
        }
      },
      
      datPhong(maPhong) {
        console.log("Đặt phòng cho mã phòng:", maPhong);
      },
      
      xemPhong(maPhong) {
        console.log("Xem thông tin phòng cho mã phòng:", maPhong);
      },
    },
  };
  </script>
  