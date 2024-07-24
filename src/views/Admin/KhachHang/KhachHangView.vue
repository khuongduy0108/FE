<template>
    <div>
      <v-row class="mt-5">
        <v-icon>mdi-home</v-icon>
        <h3 class="mr-4">Danh sách khách hàng</h3>
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
                  <th>Mã loại khách hàng</th>
                  <th>Họ tên đệm</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>SĐT</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in khachhangs" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.maKhachHang }}</td>
                  <td>{{ item.hoTenDem }}</td>
                  <td>{{ item.ten }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.soDienThoai }}</td>
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
                      @click="dialogDelete=true, maKhachHang=item.maKhachHang"
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
    name: 'KhachHang',
    data() {
      return {
        khachhangs: [],
        dialogAdd: false,
        dialogEdit: false,
        currentItem: '',
        dialogDelete: false,
        maKhachHang: '', // Thêm vào đây
      };
    },
    methods: {
      getCategories() {
        axios
          .get('https://localhost:44354/api/KhachHang')
          .then((response) => {
            this.khachhangs = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deleteCategory() {
        axios
          .delete(`https://localhost:44354/api/KhachHang/${this.maKhachHang}`)
          .then((response) => {
            var newArr = this.khachhangs.filter((x) => x.maKhachHang != this.maKhachHang);
            this.khachhangs = newArr;
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
  