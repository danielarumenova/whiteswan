<template>
  <v-app-bar app color="#1B1B1B" dark flat class="px-12" style="position:fixed">
    <v-btn fab large plain to="/"><v-toolbar-side-icon>
            <v-img class="mr-3" src="../assets/pictures/logows.png" height="40px" width="80px"> 
            </v-img>
     </v-toolbar-side-icon></v-btn>

    <v-spacer></v-spacer>
    <v-row align="center" justify="center">
      <v-btn class="text-white" text @click="gotoHome()">Home</v-btn>
      <v-btn class="text-white" text @click="gotoAbout()">About Us</v-btn>
      <v-btn class="text-white" text @click="gotoShop()">Shop</v-btn>
      <v-btn class="text-white" text @click="gotoEvents()"> Events</v-btn>
      <v-btn class="text-white" to="/contact"> Contact</v-btn>
      <v-btn v-if="products.length == 0" to="/cart">
        <v-icon color="white" left class="mr-2"
          >fa-solid fa-cart-shopping</v-icon
        >
      </v-btn>
      <v-btn v-if="products.length > 0" to="/cart">
        <v-badge :content="products.length">
          <v-icon color="white" left class="mr-2"
          >fa-solid fa-cart-shopping</v-icon
        >
      </v-badge>
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
    gotoEvents() {
      this.$router.push("/events");
    },
    gotoAbout() {
      this.$router.push("/about");
    },
    gotoShop() {
      this.$router.push("/shop");
    },
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
  },
};
</script>

<style scoped>
.btn:focus::before { opacity: 0 !important; }
.btn:hover::before { opacity: 0.08 !important; }
</style>
