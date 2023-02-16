<template>
  <v-app id="home">
    <NavBar />
    <!-- video -->
    <!-- <video autoplay muted repeat><source :src="crabrave" type="video/mp4"></video> -->
    <div class="IMGcontainer">
      <v-img src="../assets/pictures/startphoto.jpg" cover></v-img>
      <div class="text-corner">
        <div class="text-left">
          fdafsdafasdgds gsd gsdagsdagdsa gasd<br />
          gdsagdsa gsdgdsagdsagsdgsdgsdagsd gsdg asddagd<br />
          gdsgadsgsadgdsgdsgdsagdsagsadg sdag sadgasd<br />
          gsadgdsagggggggggggggggggggggggggggggggggggggggggggggg<br />
          gdsssssssssssssssssssssssssssssssssssssssssssssssssssssv<br />
        </div>
        <v-row
          align="center"
          justify="center"
          style="margin-top: 20px; margin-right: 160px"
        >
          <v-btn class="" variant="flat" color="secondary" to="/events">
            EVENTS
          </v-btn>
          <v-btn
            class=""
            variant="flat"
            color="secondary"
            style="margin-left: 10px"
            to="/about"
          >
            ABOUT US
          </v-btn>
        </v-row>
      </div>
    </div>

    <v-row align="left" justify="left" style="margin-top:70px; margin-left:75px">
      <h1>WHO ARE WE?</h1><br/>
    </v-row>
    <v-row align="left" justify="left" style="margin-top:15px;margin-left:75px">
      <h5>
        fdafsdafasdgds gsd gsdagsdagdsa gasd<br />
          gdsagdsa gsdgdsagdsagsdgsdgsdagsd gsdg asddagd<br />
          gdsgadsgsadgdsgdsgdsagdsagsadg sdag sadgasd<br />
          gsadgdsagggggggggggggggggggggggggggggggggggggggggggggg<br />
          gdsssssssssssssssssssssssssssssssssssssssssssssssssssssv<br />
      </h5>
    </v-row>


    <!-- container event  -->
    <v-container fluid style="margin-top: 50px" id="events">
      <v-row align="left" justify="left" style="margin-left:50px">
        <h1 class="">EVENTS</h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 50px"
      >
        <v-col v-for="event in events.slice(0, 3)" :key="event.id" md="4">
          <v-card
            class="mx-auto"
            max-width="450px"
            height=""
            style="border: 1px solid black"
          >
            <v-img
              src="../assets/pictures/event1.jpg"
              height="300px"

              cover
            ></v-img>
            <v-row style="margin-bottom: 20px; margin-top: 1px">
              <v-col align="left">
                {{ event.date }}
              </v-col>
              <v-col align="center"> 2023 </v-col>
              <v-col align="right"> 1:00PM </v-col>
            </v-row>
            <v-card-title>{{ event.name }} </v-card-title>
            <v-card-text>
              {{ event.location }}
            </v-card-text>
            <v-card-actions>
              <v-row>
              <v-btn
                class=""
                style="margin-left:290px"
                variant="flat" color="deep-purple-darken-4"
                :id="'buttonBuyNowEvent' + event.id"
                width="150px"
                @click="
                  addEventToCart(event);
                  addedEvent(event.id);
                "
              >
                BUY NOW
              </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
          class=""
          variant="outlined"
          to="/events"
          style="margin-left: 10px"
        >
          DISCOVER MORE ->
        </v-btn>
      </v-row>
    </v-container>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      icon="fa-solid fa-arrow-up"
      right
      style="position: fixed; right: 10px; bottom: 10px"
      color="dark"
      @click="toTop"
    >
    </v-btn>
    <!-- merch -->
    <v-container fluid style="margin-top: 50px" id="shop">
      <v-row align="left" justify="left" style="margin-left:50px">
        <h1 class="">THE MERCH</h1>
      </v-row>

      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 50px"
      >
        <v-col v-for="product in products.slice(0, 3)" :key="product.id" md="4">
          <v-card
            class="mx-auto"
            max-width="450px"
            height=""
            style="border: 1px solid black"
          >
            <v-img
              src="../assets/pictures/white1.jpg"
              height="350px"
              cover
            ></v-img>
            <v-card-title>{{ product.name }} </v-card-title>
            <v-card-text>
              {{ product.color }}
            </v-card-text>
            <v-card-text> {{ product.price }} BGN </v-card-text>
            <v-card-actions>
              <!-- <v-btn
                class=""
                variant="outlined"
                :id="'buttonBuyNowProduct' + product.id"
                width="150px"
                @click="
                  addProductToCart(product);
                  addedProduct(product.id);
                "
              >
                BUY NOW
              </v-btn> -->
              <v-btn
                class=""
                variant="flat" color="deep-purple-darken-4"
                to="/shop"
                style="margin-left: 360px"
              >
                SHOP
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn class="" variant="outlined" to="/shop" style="margin-left: 10px">
          DISCOVER MORE ->
        </v-btn>
      </v-row>
    </v-container>

    <!-- highliths  -->
    <v-container fluid style="margin-top: 50px">
      <v-row align="left" justify="left" style="margin-left:50px">
        <h1 class="">HIGHLIGHTS</h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 200px"
      >
        <v-row
          align="center"
          justify="center"
          style="margin-left: 50px; margin-right: 50px"
        >
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
      <v-row align="left" justify="left" style="margin-left:50px">
        <h1 class="">THE TEAM</h1>
      </v-row>
      <v-row style="margin-top: 100px" align="center" justify="center">
        <v-col>
          <v-divider></v-divider>
          <v-row>
            <v-col align="center">
              <v-img
                src="../assets/pictures/kristiyan.png"
                height="129px"
                width="40%"
                cover
              ></v-img>
            </v-col>
            <v-col align="center">
              <v-img
                src="../assets/pictures/konstantin.png"
                height="129px"
                width="40%"
                cover
              ></v-img>
            </v-col>
            <v-col align="center">
              <v-img
                src="../assets/pictures/radina.png"
                height="129px"
                width="40%"
                cover
              ></v-img>
            </v-col>
            <v-col align="center">
              <v-img
                src="../assets/pictures/alexander.png"
                height="129px"
                width="40%"
                cover
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-center">Kristiyan Parashkevov</p>
            </v-col>
            <v-col>
              <p class="text-center">Konstantin Hristov</p>
            </v-col>
            <v-col>
              <p class="text-center">Milena Ivanova</p>
            </v-col>
            <v-col>
              <p class="text-center">Alexander Georgiev</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-center">CEO</p>
            </v-col>
            <v-col>
              <p class="text-center">CTO</p>
            </v-col>
            <v-col>
              <p class="text-center">Content Manager</p>
            </v-col>
            <v-col>
              <p class="text-center">SoMe Manager</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn class="" variant="outlined" to="/about">About Us </v-btn>
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

    <FooterView style="height:600px"/>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import FooterView from "../components/FooterView.vue";
import NavBar from "../components/NavBar.vue";
import axios from "axios";
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
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      window.scrollTo(0, 0);
    },
    addedEvent(number) {
      let btn = document.getElementById("buttonBuyNowEvent" + number);
      console.log(number);
      console.log("buttonBuyNow" + number);
      btn.innerHTML = "ADDED TO CART";

      btn.style.backgroundColor = "green";
      setTimeout(function () {
        btn.innerHTML = "BUY NOW";
        btn.style.backgroundColor = "";
      }, 1500);
    },
    addedProduct(number) {
      let btn = document.getElementById("buttonBuyNowProduct" + number);
      console.log(number);
      console.log("buttonBuyNow" + number);
      btn.innerHTML = "ADDED TO CART";

      btn.style.backgroundColor = "green";
      setTimeout(function () {
        btn.innerHTML = "BUY NOW";
        btn.style.backgroundColor = "";
      }, 1500);
    },
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
      this.added;
    },
    addEventToCart(event) {
      this.$store.dispatch("addEventToCart", event);
      this.added;
    },
    gotoFacebook() {
      window.open("https://www.facebook.com/wsent2k20");
    },
    gotoInsta() {
      window.open("https://www.instagram.com/white_swan_entertainment/");
    },
  },
  components: {
    NavBar,
    FooterView,
  },
  data() {
    return {
      fab: false,
      crabrave: require("../assets/video/intro.mp4"),
      products: [],
      events: [],
    };
  },
  computed: {
    // products() {
    //   return this.$store.getters.availableProducts
    // },
    // events() {
    //   return this.$store.getters.availableEvents
    // }
  },
  mounted() {
    // this.$store.dispatch('fetchProducts')
    // this.$store.dispatch('fetchEvents')

    let events = axios
      .get("https://63e68b1a7eef5b2233882583.mockapi.io/events/events")
      .then((response) => (this.events = response.data));
    console.log(events);

    let products = axios
      .get("https://63e68b1a7eef5b2233882583.mockapi.io/events/products")
      .then((response) => (this.products = response.data));
    console.log(products);
  },
});
</script>
<style scoped>
#home {
  background-color: white;
}

.IMGcontainer {
  position: relative;
  text-align: center;
  color: white;
}
.text-corner {
  position: absolute;
  bottom: 80px;
  left: 100px;
}
</style>
