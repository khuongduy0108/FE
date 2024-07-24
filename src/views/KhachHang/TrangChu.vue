<template>
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item> 
    </v-carousel>
    <!-- eslint-disable -->
    <h1 style="text-align: center; font-size: 54px; color:#98D0B9; font-family:aspect-ratio; ">ĐỊA ĐIỂM DU LỊCH HOT</h1>
    <v-container grid-list-md>
    <v-row>
      <v-col v-for="index in 1" :key="index" cols="12" sm="6" md="6">
        <!-- Your Card Component Goes Here -->
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            color="grey-lighten-4"
            max-width="600"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16/9"
              cover
              src="https://cdn.tgdd.vn/Files/2021/06/22/1362304/kinh-nghiem-du-lich-ha-long-tu-tuc-tiet-kiem-202201052123291809.jpg"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-orange-darken-1 v-card--reveal text-h2"
                  style="height: 100%;"
                >
                  2.400.000 VNĐ
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">
                Trải nghiệm thực tế!
              </div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Du Lịch Hạ Long
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Chất lượng giải trí từ cuộc sống.<br>
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col v-for="index in 1" :key="index" cols="12" sm="6" md="6">
        <!-- Your Card Component Goes Here -->
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            color="grey-lighten-4"
            max-width="600"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16/9"
              cover
              src="https://static.vinwonders.com/2022/11/du-lich-nha-trang.jpg"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                  style="height: 100%;"
                >
                  5.000.000 VNĐ
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">
                Tận hưởng cuộc sống
              </div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Du Lịch Nha Trang
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Our Vintage kitchen utensils delight any chef.<br>
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-for="index in 1" :key="index" cols="12" sm="6" md="6">
        <!-- Your Card Component Goes Here -->
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            color="grey-lighten-4"
            max-width="600"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16/9"
              cover
              src="https://cdn.tgdd.vn/Files/2023/08/23/1544026/du-lich-thua-thien-hue-cam-nang-du-lich-va-18-dia-diem-dep-hap-dan-202308231445179171.jpg"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                  style="height: 100%;"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">
                For the perfect meal
              </div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Du Lịch Huế
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Our Vintage kitchen utensils delight any chef.<br>
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-for="index in 1" :key="index" cols="12" sm="6" md="6">
        <!-- Your Card Component Goes Here -->
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            color="grey-lighten-4"
            max-width="600"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16/9"
              cover
              src="https://disantrangan.vn/wp-content/uploads/2020/10/trang_an_ninh_binh_2021.jpg"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                  style="height: 100%;"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">
                For the perfect meal
              </div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Du Lịch Tràng An
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Our Vintage kitchen utensils delight any chef.<br>
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>

    
  <h1 style="text-align: center; font-size: 54px; color:#98D0B9; font-family:aspect-ratio; ">Khách sạn giá rẻ now!!!!</h1>
    <v-container
    class="fill-height"
    fluid
    style="min-height: 435px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
    <v-card>
      <v-img src="https://tubepfurniture.com/wp-content/uploads/2020/09/phong-mau-khach-san-go-cong-nghiep-01.jpg" height="250"></v-img>
      <v-card-title class="text-h6 text-center">
        Khách sạn Thiên Bình
      </v-card-title>
    <v-container>
        <!-- Add a v-row to center the buttons -->
        <v-row justify="center">
            <!-- "Chi tiết" button with red color -->
            <v-btn @click="showDetails" color="#98D0B9" class="mr-4">Chi tiết</v-btn>
            
            <!-- "Đặt phòng" button with red color -->
            <v-btn @click="bookRoom" color="#98D0B9">Đặt phòng</v-btn>
        </v-row>
        </v-container>
    </v-card>
  </v-col>

  <v-col cols="6">
    <v-card>
      <v-img src="https://tubepfurniture.com/wp-content/uploads/2020/09/phong-mau-khach-san-go-cong-nghiep-02.jpg" height="250"></v-img>
      <v-card-title class="text-h6 text-center">
        Khách sạn Bình Yên
      </v-card-title>
    <v-container>
        <!-- Add a v-row to center the buttons -->
        <v-row justify="center">
            <!-- "Chi tiết" button with red color -->
            <v-btn @click="showDetails" color="#98D0B9" class="mr-4">Chi tiết</v-btn>
            
            <!-- "Đặt phòng" button with red color -->
            <v-btn @click="bookRoom" color="#98D0B9">Đặt phòng</v-btn>
        </v-row>
        </v-container>
    </v-card>
  </v-col>
  
  <v-col cols="6">
    <v-card>
      <v-img src="https://noithattrevietnam.com/uploaded/2019/12/1-thiet-ke-phong-ngu-khach-san%20%281%29.jpg" height="250"></v-img>
      <v-card-title class="text-h6 text-center">
        Khách sạn Lý Thông
      </v-card-title>
    <v-container>
        <!-- Add a v-row to center the buttons -->
        <v-row justify="center">
            <!-- "Chi tiết" button with red color -->
            <v-btn @click="showDetails" color="#98D0B9" class="mr-4">Chi tiết</v-btn>
            
            <!-- "Đặt phòng" button with red color -->
            <v-btn @click="bookRoom" color="#98D0B9">Đặt phòng</v-btn>
        </v-row>
        </v-container>
    </v-card>
  </v-col>

  <v-col cols="6">
    <v-card>
      <v-img src="https://tubepfurniture.com/wp-content/uploads/2020/09/phong-mau-khach-san-go-cong-nghiep-01.jpg" height="250"></v-img>
      <v-card-title class="text-h6 text-center">
        Khách sạn Vo viên
      </v-card-title>
    <v-container>
        <!-- Add a v-row to center the buttons -->
        <v-row justify="center">
            <!-- "Chi tiết" button with red color -->
            <v-btn @click="showDetails" color="#98D0B9" class="mr-4">Chi tiết</v-btn>
            
            <!-- "Đặt phòng" button with red color -->
            <v-btn @click="bookRoom" color="#98D0B9">Đặt phòng</v-btn>
        </v-row>
        </v-container>
    </v-card>
  </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cozihotel.com/wp-content/uploads/2017/09/gallery-pool-2-1.jpeg',

          },
          {
            src: 'https://png.pngtree.com/thumb_back/fw800/background/20230423/pngtree-hotel-room-that-has-a-window-overlooking-the-harbor-image_2489169.jpg',
          },
          {
            src: 'https://watermark.lovepik.com/photo/20211126/large/lovepik-background-of-hotel-cafeteria-picture_501117974.jpg',

          },
          {
            src: 'https://png.pngtree.com/thumb_back/fw800/background/20230612/pngtree-the-bay-cove-resort-hotel-and-spa-in-cancun-image_2961301.jpg',
          },
        ],
      }
    },
  }
</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
</style>