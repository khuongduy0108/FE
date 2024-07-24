<template>
    <v-dialog v-model="dialog" max-width="650px">
      <v-card>
        <v-card-title class="headline">Thêm đặt phòng mới</v-card-title>
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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="$emit('close')">Hủy</v-btn>
          <v-btn color="primary" @click="addDatphong">Lưu</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    props: ['dialogAdd'],
    computed: {
      dialog: {
        get() {
          return this.dialogAdd;
        },
        set(value) {
          if (!value) {
            this.$emit('close');
          }
        },
      },
    },
    data() {
      return {
        data: {
            maKhachHang:'',
            maPhong: '',
            ngayNhanPhong: '',
            ngayTraPhong: '',
            tongTien: '',
        },
      };
    },
    methods: {
      addDatphong() {
        axios.post('https://localhost:44354/api/DatPhong', this.data)
          .then(response => {
            this.$emit('close');
            this.$emit('updateData');
            console.log(response.status);
          })
          .catch(e => {
            console.log(e);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
  
  .v-text-field {
    width: 100%;
    margin-bottom: 16px;
  }
  
  .v-card-actions {
    border-top: 1px solid #ccc;
    padding-top: 16px;
    margin-top: 16px;
  }
  
  .v-btn {
    margin-left: 8px;
  }
  </style>
  