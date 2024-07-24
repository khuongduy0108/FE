<template>
    <v-app>
        <side-bar/>  
        <top-bar/>         
      <v-main>
        <v-container class="py-3 px-6" bg-color="red">
            <router-view/>
        </v-container>
      </v-main>
    </v-app>

</template>

<script>
import TopBar from '../components/Admin/TopBar.vue'
import SideBar from '../components/Admin/SideBar.vue'

export default {
  props: {
  },
  components: { TopBar, SideBar},
    name:'AdminView'
}
</script>

<style>

</style>