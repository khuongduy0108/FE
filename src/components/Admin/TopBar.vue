<template>
    <v-app-bar color="#98D0B9">
      <v-spacer></v-spacer>
      <v-toolbar-item background-color="#98D0B9">
        <router-link to="/LoginView" class="custom-link">
          <v-btn>Đăng nhập</v-btn>
        </router-link>
        <router-link to="/RegisterView" class="custom-link">
          <v-btn>Đăng Ký</v-btn>
        </router-link>
        <v-btn>
          <v-icon>mdi-horse</v-icon>
        </v-btn>
        <v-btn>
          <v-badge color="red" content="99+">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-avatar class="mx-5">
          <v-img
            src="https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_1044892.jpg"
            alt="Khuong"
          ></v-img>
        </v-avatar>
      </v-toolbar-item>
    </v-app-bar>
  </template>
  
  <style>
  .custom-link {
    text-decoration: none; /* Remove underline */
    color: rgb(3, 3, 3); /* Set your desired color */
  }
  
  .custom-link:hover {
    color: lightgrey; /* Change color on hover if needed */
  }
  </style>
  