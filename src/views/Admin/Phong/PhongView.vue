<template>
    <div>
      <v-row class="mt-5">
        <v-icon>mdi-home</v-icon>
        <h3 class="mr-4">Danh Loại Phòng</h3>
        <v-spacer></v-spacer>
        <v-btn icon small color="primary" @click="dialogAdd = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-row class="mt-1">
        <v-col>
          <v-card>
            <v-table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã phòng</th>
                  <th>Số phòng</th>
                  <th>Hình ảnh phòng</th>
                  <th>Mã khách sạn</th>
                  <th>Mã loại phòng</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in phongs" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.maPhong }}</td>
                  <td>{{ item.soPhong }}</td>
                  <img :src="item.hinhAnhPhong" alt="Hình ảnh phòng" style="max-width: 100px; max-height: 100px;">
                  <td>{{ item.maKhachSan }}</td>
                  <td>{{ item.maLoaiPhong }}</td>
                  <td>
                    <v-btn
                      color="blue"
                      size="small"
                      class="mr-3"
                      icon
                      @click="dialogEdit=true, currentItem=item"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      color="red"
                      size="small"
                      class="mr-3"
                      icon
                      @click="dialogDelete=true, maPhong=item.maPhong"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
      <add-view :dialogAdd="dialogAdd" @close="dialogAdd=false" @updateData="getCategories" />
      <edit-view
        :dialogEdit="dialogEdit"
        @close="dialogEdit=false"
        @updateData="getCategories"
        :currentItem="currentItem"
      />
      <v-dialog max-width="400px" v-model="dialogDelete">
        <v-card>
          <v-alert type="error">
            <v-row align="center">
              <v-col cols="11" class="text-center">
                Bạn có muốn xóa không
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col cols="6">
                <v-btn variant="text" @click="deleteCategory">Đồng ý</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn variant="text" @click="dialogDelete=false">Hủy bỏ</v-btn>
              </v-col>
            </v-row>
          </v-alert>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import AddView from './AddView.vue';
  import EditView from './EditView.vue';
  
  export default {
    components: { AddView, EditView },
    name: 'PhongView',
    data() {
      return {
        phongs: [],
        dialogAdd: false,
        dialogEdit: false,
        currentItem: '',
        dialogDelete: false,
        maPhong: '', // Thêm vào đây
      };
    },
    methods: {
      getCategories() {
        axios
          .get('https://localhost:44354/api/Phong')
          .then((response) => {
            this.phongs = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deleteCategory() {
        axios
          .delete(`https://localhost:44354/api/Phong/${this.maPhong}`)
          .then((response) => {
            var newArr = this.phongs.filter((x) => x.maPhong != this.maPhong);
            this.phongs = newArr;
            this.dialogDelete = false;
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    created() {
      this.getCategories();
    },
  };
  </script>
  
  <style>
  </style>
  