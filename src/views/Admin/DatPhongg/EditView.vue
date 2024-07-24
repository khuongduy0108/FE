<template>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <v-card-title>
          <span>Chỉnh sửa khách hàng</span>
        </v-card-title>
        <v-card-text>
            <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Mã khách hàng" v-model="data.maKhachHang" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Mã phòng" v-model="data.maPhong" outlined></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Ngày nhận phòng" v-model="data.ngayNhanPhong" outlined type="datetime-local"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field label="Ngày trả phòng" v-model="data.ngayTraPhong" outlined type="datetime-local"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field label="Tổng tiền" v-model="data.tongTien" outlined></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="$emit('close')">Hủy</v-btn>
          <v-btn color="primary" @click="updateDatPhong">Cập nhật</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EditView',
    data() {
    return {
        data: {
        maDatPhong: '',
        maKhachHang: '',
        maPhong: '', // Add this line
        ngayNhanPhong: '',
        ngayTraPhong: '',
        tongTien: '',
        },
    };
    },

    methods: {
        updateDatPhong() {
        axios.put('https://localhost:44354/api/DatPhong/' + this.data.maDatPhong, this.data)
          .then(response => {
            this.$emit('close');
            this.$emit('updateData');
            console.log(response.status);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    props: ['dialogEdit', 'currentItem'],
    computed: {
      dialog: {
        get() {
          return this.dialogEdit;
        },
        set(value) {
          if (!value) {
            this.$emit('close');
          }
        }
      }
    },
    watch: {
    currentItem: function () {
        this.data.maDatPhong = this.currentItem.maDatPhong;
        this.data.maKhachHang = this.currentItem.maKhachHang;
        this.data.maPhong = this.currentItem.maPhong; // Added line
        this.data.ngayNhanPhong = this.currentItem.ngayNhanPhong;
        this.data.ngayTraPhong = this.currentItem.ngayTraPhong; // Corrected line
        this.data.tongTien = this.currentItem.tongTien;
    },
    }
}
  </script>
  
  <style>
  /* Các quy tắc CSS tùy chỉnh có thể được thêm ở đây nếu cần thiết */
  </style>
  