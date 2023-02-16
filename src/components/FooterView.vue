<template>
  <v-footer color="black">
    <v-row style="margin-top: 100px" align="center" justify="center">
      <v-col>
        <v-divider></v-divider>
        <v-row>
          <v-col align="center">
            <v-img class="mr-3" src="../assets/pictures/logows.png" height="200px" width="200px"></v-img>
          </v-col>
          <v-col align="center">
            <h2 class="text-white">Contact Us</h2>
            <br>
            <p class="text-white text-center">Tel: (+359) 89 859 7716</p>
            <br>
            <p class="text-white text-center">whiteswan2k20@gmail.com</p>
          </v-col>
          
          <v-col align="center">
            <h2 class="text-white">Site Map</h2>
            <v-btn class="text-white" variant="text" style="margin-right:50px" to="/">Home</v-btn><br/>
            <v-btn class="text-white" variant="text" style="margin-right:25px" to="/about">About us</v-btn><br/>
            <v-btn class="text-white" variant="text" style="margin-right:45px" to="/events">Events</v-btn><br/>
            <v-btn class="text-white" variant="text" style="margin-right:55px" to="/shop">Shop</v-btn><br/>
            <v-btn class="text-white" variant="text" style="margin-right:30px" to="/contact">Contact</v-btn><br/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- empty -->
          </v-col>
          <v-col align="center" justify="center">
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  methods: {
    gotoLinkedin() {
      window.open("https://www.linkedin.com/in/daniela-rumenova-a4b746187");
    },
    gotoInsta() {
      window.open("https://www.instagram.com/white_swan_entertainment/");
    },
    
  },
};
</script>

<style scoped></style>
