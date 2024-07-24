<template>
    <div>
      <v-img class="mx-auto my-6" max-width="228"
        src="https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_1044892.jpg"></v-img>
  
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Create an Account</div>
  
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
  
        <!-- Add a password confirmation field for registration -->
        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="Confirm your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible"></v-text-field>
  
        <!-- Add additional registration fields if needed -->
  
        <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
          Sign Up
        </v-btn>
  
        <v-card-text class="text-center">
          Already have an account?
          <router-link to="/login" class="text-blue">Log in</router-link>
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
      confirmPassword: "",
    };
  },
  methods: {
    async register() {
      try {
        // Check if passwords match
        if (this.password !== this.confirmPassword) {
          console.error("Passwords do not match");
          return;
        }

        // Make an HTTP request to your backend registration endpoint
        await this.$axios.post("/api/User", {
          fullname: this.fullname,
          username: this.email, // Assuming you use email as the username for registration
          password: this.password,
          email: this.email,
        });

        // Redirect to the login page or update the UI
        this.$router.push("/login");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  },
};
</script>