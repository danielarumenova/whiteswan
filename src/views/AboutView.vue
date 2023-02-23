<template>
  <v-app id="home">
    <NavBar />
<v-container style="margin-top: 150px">
  <v-row>
    <v-col style="margin-top:100px">
      <v-row><h1 style="font-family: 'Tilt Warp'">ABOUT</h1></v-row>
      <v-row><p>
        We are a Bulgarian event management company that prides ourselves on delivering a high-end experience for all of our guests. Our team works tirelessly to create attention-grabbing and intriguing party themes, and we only work with the best DJs to ensure that the music at our events is always current and popular.</p></v-row>
    </v-col>
    <v-col style="margin-left:50px"><v-img
              src="../assets/pictures/6.jpeg"
              height="350px"
              width="600px"
              cover
            ></v-img></v-col>
  </v-row>
</v-container>

<v-container style="margin-top: 150px; margin-bottom:100px">
  <v-row>
    
    <v-col><v-img
              src="../assets/pictures/2.jpeg"
              height="400px"
              width="600px"
              cover
            ></v-img></v-col>
            <v-col style="margin-left:50px;margin-top:100px">
      <v-row><h1 style="font-family: 'Tilt Warp'">WHITE SWAN</h1></v-row>
      <v-row><p>
        In addition to the atmosphere and music, we also place a strong emphasis on the customer experience and social media engagement. We believe that fostering a positive experience for our guests is of the utmost importance and we understand that social media is one of the primary ways that people connect with events like ours. As such, we put a great deal of effort into ensuring that our guests are satisfied and that their engagement on social media reflects this satisfaction.</p></v-row>
    </v-col>
  </v-row>
</v-container>
<v-container style="margin-top:100px; margin-bottom:-115px;z-index:9999">
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="200px">
            <v-img
              src="../assets/pictures/10.jpeg"
              height="200px"
              width="200px"
              cover
            ></v-img>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="200px" @click="gotoInsta()">
            <v-img
              src="../assets/pictures/insta.png"
              height="200px"
              width="200px"
              cover
            ></v-img>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="200px">
            <v-img
              src="../assets/pictures/season2.png"
              height="200px"
              width="200px"
              cover
            ></v-img>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="200px" @click="gotoFacebook()">
            <v-img
              src="../assets/pictures/facebook.png"
              height="200px"
              width="200px"
              cover
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <FooterView />
  </v-app>
</template>

<script>
//import InstagramEmbed from 'vue-instagram-embed';
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import FooterView from "../components/FooterView.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    FooterView,
  },
  methods:{
    gotoFacebook() {
      window.open("https://www.facebook.com/wsent2k20");
    },
    gotoInsta() {
      window.open("https://www.instagram.com/white_swan_entertainment/");
    },
  }
});
</script>

<style scoped>

</style>
