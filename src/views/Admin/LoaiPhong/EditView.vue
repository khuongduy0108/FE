<template>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <v-card-title>
          <span>Chỉnh sửa loại phòng</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Tên loại phòng" v-model="data.tenLoai" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Mô tả" v-model="data.moTa" outlined></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="$emit('close')">Hủy</v-btn>
          <v-btn color="primary" @click="updateLoaiPhong">Cập nhật</v-btn>
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
            maLoaiPhong: '',
            tenLoai: '',
            moTa: ''
        }
      };
    },
    methods: {
        updateLoaiPhong() {
        axios.put('https://localhost:44354/api/LoaiPhong/' + this.data.maLoaiPhong, this.data)
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
        this.data.maLoaiPhong = this.currentItem.maLoaiPhong;
        this.data.tenLoai = this.currentItem.tenLoai;
        this.data.moTa = this.currentItem.moTa;
      }
    }
  };
  </script>
  
  <style>
  /* Các quy tắc CSS tùy chỉnh có thể được thêm ở đây nếu cần thiết */
  </style>
  