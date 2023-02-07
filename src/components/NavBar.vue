<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-toolbar-side-icon>
            <v-img class="mr-3" src="../assets/pictures/logows.png" height="100px" width="80px"> 
            </v-img>
     </v-toolbar-side-icon>

    <v-spacer></v-spacer>
    <v-row align="center" justify="center">
      <v-btn text @click="gotoHome()">Home</v-btn>
      <v-btn text @click="gotoAbout()">About Us</v-btn>
      <v-btn text @click="scroll('shop')">Shop</v-btn>
      <v-btn text @click="scroll('events')"> Events</v-btn>
      <v-btn to="/contact"> Contact</v-btn>
      <v-btn v-if="products.length == 0" to="/cart">
        <v-icon color="white" left class="mr-2"
          >fa-solid fa-cart-shopping</v-icon
        >
      </v-btn>
      <v-btn v-if="products.length >0" to="/cart">
        <v-icon color="white" left class="mr-2"
          >fa-solid fa-cart-shopping</v-icon
        >{{ products.length }}
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
    gotoHome() {
      this.$router.push("/");
    },
    gotoAbout() {
      this.$router.push("/about");
    },
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
  },
};
</script>

<style></style>
