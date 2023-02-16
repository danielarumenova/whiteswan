<template>
  <v-app id="home">
    <NavBar />
    <v-container style="margin-top: 150px">
      <v-row align="center" justify="center">
        <h1 class=""> WhiteSwan Latest Post on FB</h1>
      </v-row>
      <v-row align="center" justify="center" style="margin-top:100px">
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwsent2k20%2Fposts%2Fpfbid034zWbg7RWG4zXLksA1mE12W5HP64zyS2fYBFoDJfBPhSqHPLaVyrtn6UgHogXfBUFl&show_text=true&width=500" width="500" height="668" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </v-row>
</v-container>

<v-container style="margin-top: 150px">
  <v-row align="center" justify="center">
        <h1 class=""> OUR TEAM</h1>
      </v-row>
  <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 200px"
      >
        <v-col>
          <v-img
            src="../assets/pictures/2.jpeg"
            height="500px"
          ></v-img>
        </v-col>
        <v-col>
          <p class="">
          We are a Bulgarian event management company that prides ourselves on delivering a high-end experience for all of our guests. Our team works tirelessly to create attention-grabbing and intriguing party themes, and we only work with the best DJs to ensure that the music at our events is always current and popular.
        </p>
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
    //InstagramEmbed
  },
});
</script>

<style scoped>

</style>
