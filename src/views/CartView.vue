<template>
  <v-app id="home">
    <NavBar />
    <v-container style="margin-top:150px">
      <CheckoutView></CheckoutView>
    </v-container>
    <FooterView />
  </v-app>
</template>
<script>
import CheckoutView from "@/components/CheckoutView.vue";
import NavBar from "../components/NavBar.vue";
import FooterView from "../components/FooterView.vue";
export default {
  components: {
    CheckoutView,
    NavBar,
    FooterView,
  },
};
</script>
<style scoped>

</style>
