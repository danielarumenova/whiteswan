<template>
  <v-app id="home">
    <NavBar />


<v-container style="margin-top:150px">
  <v-row align="center" justify="center">
        <h1 class="">THE MERCH</h1>
      </v-row>
  <v-row style="margin-top:50px">
    <v-col v-for="product in products.slice(0,9)" :key="product.id">
  <v-card
    class="mx-auto"
    max-width="400px"
    style="padding: 30px; border: 1px solid black"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="350px"
      cover
    ></v-img>

    <v-card-title class="">
      {{product.name}}
    </v-card-title>

    <v-card-subtitle class="">
      Color: {{product.color}}
      
    </v-card-subtitle>
    <v-card-subtitle class="">
      Price: {{product.price}} BGN
      
    </v-card-subtitle>
    <v-card-actions>
      <v-btn class="" variant="outlined" :id='"buttonBuyNow"+product.id' width="150px" @click="addProductToCart(product);added(product.id)"> BUY NOW </v-btn>

      <v-spacer></v-spacer>
      <v-btn class="" variant="outlined" :to="product.urll" style="margin-left:10px"> MORE DETAILS </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
</v-container>

    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import FooterView from "../components/FooterView.vue";
import axios from 'axios';
export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    FooterView,
  },
  data () {
    return {
      products:[]
    }
  },
  mounted () {
    let something = axios
      .get('https://63e68b1a7eef5b2233882583.mockapi.io/events/events')
      .then(response => (this.products = response.data))
      console.log(something)
  },
  methods: {
    addProductToCart(event) {
        this.$store.dispatch('addProductToCart', event)
    },
    added(number) {
    let btn = document.getElementById("buttonBuyNow"+number);
    
    btn.innerHTML = "ADDED TO CART"
    
    btn.style.backgroundColor = "green";
    setTimeout(function(){
      btn.innerHTML = "BUY NOW"
      btn.style.backgroundColor = "";
    },1500)
  },
  },
  
//   computed: {
//     events() {
//       return this.$store.getters.availableEvents
//     }
//   },
});
//console.log(events);
</script>

<style scoped>

</style>
