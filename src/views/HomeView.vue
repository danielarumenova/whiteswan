<template>
  <v-app id="home">
    <NavBar />
    <!-- video -->
    <video autoplay muted repeat><source :src="crabrave" type="video/mp4"></video>
    <!-- container event  -->
    <v-container fluid style="margin-top: 50px" id="events">
      <v-row align="center" justify="center">
        <h1 class="text-white">THE EVENT NOW</h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 200px"
        v-for="event in events" :key="event.id"
      >
        <v-col style="margin-left: 20%">
          <v-img
            src="../assets/pictures/event1.jpg"
            cover
          ></v-img>
        </v-col>
        <v-col style="margin-right: 20%">
          <h2 class="text-white">{{event.name}}</h2>
          <br />
          <p class="text-white">
            {{event.description}}
          </p>
          <br />
          <p class="text-white"><strong>Date: </strong>{{event.date}}</p>
          <br />
          <p class="text-white">
            <strong>Location: </strong> {{event.location}}
          </p>
          <br />
          <p class="text-white">
            <strong>Price : </strong> {{event.price}}
          </p>
          <br />
          <v-row align="center" justify="center">
            <v-btn class="text-white" variant="outlined" @click="addEventToCart(event)"> BUY NOW </v-btn>
            <!-- <v-btn class="text-white" variant="outlined" :to="event.urll" style="margin-left:10px"> MORE DETAILS </v-btn> -->
          
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            icon="fa-solid fa-arrow-up"
            right
            style=" position:fixed;
                right:10px;
                bottom:10px;"
            color="dark"
            @click="toTop">
          </v-btn>
    <!-- merch -->
    <v-container fluid style="margin-top: 50px" id="shop">
      <v-row align="center" justify="center">
        <h1 class="text-white">THE MERCH</h1>
      </v-row>
      

      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 100px"
        v-for="product in products" :key="product.id"
      >
        <v-col style="margin-left: 20%">
          <v-img
            src="../assets/pictures/white1.jpg"
            
            cover
          ></v-img>
        </v-col>
        <v-col style="margin-right: 20%">
          <h2 class="text-white">{{product.name}}</h2>
          <br />
          <p class="text-white">
            Color: {{product.color}}
          </p>
          <br />
          <p class="text-white">
            {{product.price}} BGN
          </p>
          <br>
          <v-row align="center" justify="center">
            <v-btn class="text-white" variant="outlined" @click="addProductToCart(product)"> SHOP NOW </v-btn>
            <v-btn class="text-white" variant="outlined" :to="product.urll" style="margin-left:10px"> MORE DETAILS </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>


    <!-- highliths  -->
    <v-container fluid style="margin-top: 50px">
      <v-row align="center" justify="center">
        <h1 class="text-white">HIGHLIGHTS</h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 200px"
      >
      <v-row align="center" justify="center" style="margin-left:50px; margin-right:50px">
          <template v-for="(item, i) in items" :key="i">
            <v-col md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  :elevation="isHovering ? 12 : 2"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-img :src="item.img" height="400px" cover> </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
          </v-row>
      </v-row>
    </v-container>


<!-- TEAM   -->
    <v-container fluid style="margin-top: 50px">
      <v-row align="center" justify="center">
        <h1 class="text-white">THE TEAM</h1>
      </v-row>
      <v-row style="margin-top: 100px" align="center" justify="center">
        <v-col>
          <v-divider></v-divider>
          <v-row>
            <v-col align="center">
              <v-img src="../assets/pictures/kristiyan.png" height="129px" width="40%" cover></v-img>
            </v-col>
            <v-col align="center">
              <v-img src="../assets/pictures/konstantin.png" height="129px" width="40%" cover></v-img>
            </v-col>
            <v-col align="center">
              <v-img src="../assets/pictures/radina.png" height="129px" width="40%" cover></v-img>
            </v-col>
            <v-col align="center">
              <v-img src="../assets/pictures/alexander.png" height="129px" width="40%" cover></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-white text-center">Kristiyan Parashkevov</p>
            </v-col>
            <v-col>
              <p class="text-white text-center">Konstantin Hristov</p>
            </v-col>
            <v-col>
              <p class="text-white text-center">Milena Ivanova</p>
            </v-col>
            <v-col>
              <p class="text-white text-center">Alexander Georgiev</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-white text-center">CEO</p>
            </v-col>
            <v-col>
              <p class="text-white text-center">CTO</p>
            </v-col>
            <v-col>
              <p class="text-white text-center">Content Manager</p>
            </v-col>
            <v-col>
              <p class="text-white text-center">SoMe Manager</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn class="text-white" to="/about">About Us </v-btn>
      </v-row>
    </v-container>

    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import FooterView from "../components/FooterView.vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    return {
      slider2: 50,
      items: [
        {
          img: require("../assets/pictures/10.jpeg"),
        },
        {
          img: require("../assets/pictures/2.jpeg"),
        },
        {
          img: require("../assets/pictures/3.jpeg"),
        },
        {
          img: require("../assets/pictures/4.jpeg"),
        },
        {
          img: require("../assets/pictures/5.jpeg"),
        },
        {
          img: require("../assets/pictures/6.jpeg"),
        },
        {
          img: require("../assets/pictures/7.jpeg"),
        },
        {
          img: require("../assets/pictures/8.jpeg"),
        },
        {
          img: require("../assets/pictures/9.jpeg"),
        },
      ],
    };
  },
  methods: {
  addProductToCart(product) {
    this.$store.dispatch('addProductToCart', product)
  },
  addEventToCart(event) {
    this.$store.dispatch('addEventToCart', event)
  },
  onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      window.scrollTo(0,0);
    },
  },
  components: {
    NavBar,
    FooterView
  },
  data() {
    return {
      fab:false,
      crabrave: require("../assets/video/intro.mp4"),
    };
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts
    },
    events() {
      return this.$store.getters.availableEvents
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchEvents')
  }
});
</script>
<style>
#home {
  background-color: black;
}

</style>
