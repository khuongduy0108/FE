<template>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <v-card-title>
          <span>Chỉnh sửa khách sạn</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Họ và tên đệm" v-model="data.tenKhachSan" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Tên" v-model="data.diaChi" outlined></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Email" v-model="data.soDienThoai" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field label="Số điện thoại" v-model="data.hinhAnhKhachSan" outlined></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="$emit('close')">Hủy</v-btn>
          <v-btn color="primary" @click="updateKhachSan">Cập nhật</v-btn>
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
          maKhachSan: '',
          tenKhachSan: '',
          diaChi: '',
          soDienThoai: '',
          hinhAnhKhachSan: ''
        }
      };
    },
    methods: {
      updateKhachSan() {
        axios.put('https://localhost:44354/api/KhachSan/' + this.data.maKhachSan, this.data)
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
        this.data.maKhachSan = this.currentItem.maKhachSan;
        this.data.tenKhachSan = this.currentItem.tenKhachSan;
        this.data.diaChi = this.currentItem.diaChi;
        this.data.soDienThoai = this.currentItem.soDienThoai;
        this.data.hinhAnhKhachSan = this.currentItem.hinhAnhKhachSan;
      }
    }
  };
  </script>
  
  <style>
  /* Các quy tắc CSS tùy chỉnh có thể được thêm ở đây nếu cần thiết */
  </style>
  