<template>
<v-app>
    <top-bar/>
    <v-main>
        <v-container grid-list-xs>
            
    
            <v-card
            class="mx-auto"
            max-width="400"
            >
            <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
            >
            <v-card-title>Vũ Duy Khương</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
            0911420983
            </v-card-subtitle>

            <v-card-text>
            <div>Thái Bình</div>

            <div>Yêu màu hồng, ghét sự giả dối!!!!</div>
            </v-card-text>

            <v-card-actions>
            <v-btn color="red">
                Xem thêm
            </v-btn>

            <v-btn color="red">
                Call
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
    </v-main>
    <foot-bar/>
</v-app>
</template>

<script>
import TopBar from '../../components/Client/TopBar.vue';
import FootBar from '../../components/Client/FootBar.vue';
export default {
  components: { TopBar, FootBar },
    name: 'FELienHe',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>