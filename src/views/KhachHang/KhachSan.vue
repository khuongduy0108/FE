<template>
    <v-app>
      <top-bar />   
      <v-main>
        <h1 style="text-align: center; font-size: 54px; color:#98D0B9; font-family:aspect-ratio;">
          BOOK Khách SẠN NOW!
        </h1>
        <v-container>
          <v-row justify="center">
            <v-col v-for="khachSan in danhSachKhachSan" :key="khachSan.maKhachSan" cols="12" sm="8" md="6">
              <v-card>
                <v-img
                  v-if="khachSan.hinhAnhKhachSan"
                  :src="khachSan.hinhAnhKhachSan"
                  height="300"
                  contain
                ></v-img>
                <v-card-title class="text-h5 text-center">{{ khachSan.tenKhachSan }}</v-card-title>
                <v-card-subtitle class="text-center">{{ khachSan.diaChi }}</v-card-subtitle>
                <v-card-text class="text-center">{{ khachSan.soDienThoai }}</v-card-text>
  
                <!-- Thêm nút "Đặt phòng" và "Xem chi tiết" được căn giữa -->
                <div class="text-center">
                <v-container>
                  <v-btn @click="datPhong(khachSan.maKhachSan)" color="#98D0B9" class="mr-4">Đặt phòng</v-btn>
                  <v-btn @click="xemChiTiet(khachSan.maKhachSan)" color="#98D0B9">Xem chi tiết</v-btn>
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
        danhSachKhachSan: [], 
      };
    },
  
    mounted() {
      this.fetchDanhSachKhachSan();
    },
  
    methods: {
      async fetchDanhSachKhachSan() {
        try {
          const response = await axios.get("https://localhost:44354/api/KhachSan");
  
          this.danhSachKhachSan = response.data;
        } catch (error) {
          console.error("Error fetching danhSachKhachSan:", error);
        }
      },
      
      datPhong(maKhachSan) {
        console.log("Đặt phòng cho mã khách sạn:", maKhachSan);
      },
      
      xemChiTiet(maKhachSan) {
        console.log("Xem chi tiết cho mã khách sạn:", maKhachSan);
      },
    },
  };
  </script>
  