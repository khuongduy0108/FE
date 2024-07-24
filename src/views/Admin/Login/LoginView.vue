<template>
    <div>
      <v-img class="mx-auto my-6" max-width="228"
        src="https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_1044892.jpg"></v-img>
  
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
          variant="outlined"></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            Forgot login password?</a>
        </div>
  
        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible"></v-text-field>
  
        <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
          Log In
        </v-btn>
  
        <v-card-text class="text-center">
          <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>
 <script>
 export default {
   data() {
     return {
       visible: false,
       email: "",
       password: "",
     };
   },
   methods: {
     async login() {
       try {
         // Make an HTTP request to your backend login endpoint
         const response = await this.$axios.post("/api/User/login", {
           username: this.email, // Assuming you use email as the username for login
           password: this.password,
         });
 
         // Save the token to localStorage or Vuex store
         const token = response.data.token;
         localStorage.setItem("token", token);
 
         // Redirect to the desired page or update the UI
         this.$router.push("/dashboard");
       } catch (error) {
         console.error("Login failed:", error);
       }
     },
   },
 };
 </script>