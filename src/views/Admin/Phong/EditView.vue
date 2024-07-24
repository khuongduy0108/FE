<template>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <v-card-title>
          <span>Chỉnh sửa phòng</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Số phòng" v-model="data.soPhong" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Hình ảnh phòng" v-model="data.hinhAnhPhong" outlined></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Mã loại phòng" v-model="data.maKhachSan" outlined></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="$emit('close')">Hủy</v-btn>
          <v-btn color="primary" @click="updatePhong">Cập nhật</v-btn>
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
            maPhong: '',
            soPhong: '',
            hinhAnhPhong: '',
            maKhachSan: '',
            maLoaiPhong: ''
        }
      };
    },
    methods: {
      updatePhong() {
        axios.put('https://localhost:44354/api/Phong/' + this.data.maPhong, this.data)
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
        this.data.maPhong = this.currentItem.maPhong;
        this.data.soPhong = this.currentItem.soPhong;
        this.data.hinhAnhPhong = this.currentItem.hinhAnhPhong;
        this.data.maKhachSan = this.currentItem.maKhachSan;
        this.data.maLoaiPhong = this.currentItem.maLoaiPhong;
      }
    }
  };
  </script>
  
  <style>
  /* Các quy tắc CSS tùy chỉnh có thể được thêm ở đây nếu cần thiết */
  </style>
  