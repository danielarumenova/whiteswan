<template>
  <v-footer color="black">
    <v-row style="margin-top: 100px" align="center" justify="center">
      <v-col>
        <v-divider></v-divider>
        <v-row>
          <v-col align="center">
            <h2 class="text-white">Lets get in touch!</h2>
          </v-col>
          <v-col align="center">
            <h2 class="text-white">Contact Us</h2>
          </v-col>
          
          <v-col align="center">
            <h2 class="text-white">Social</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- empty -->
          </v-col>
          <v-col align="center" justify="center">
            <p class="text-white text-center">
              Ruse,Bulgaria
            </p>
            <p class="text-white text-center">Tel: (+359) 89 859 7716</p>
          </v-col>
          <v-col>
            <v-col align="center" justify="center">
              <v-btn
                class="mx-4"
                icon="fas fa-brands fa-instagram"
                variant="plain"
                @click="gotoInsta()"
                color="white"
              ></v-btn
              >
              <v-btn
                class="mx-4"
                icon="fas fa-brands fa-facebook"
                @click="gotoFacebook()"
                variant="plain"
                color="white"
              ></v-btn
            ></v-col>
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

<style></style>
