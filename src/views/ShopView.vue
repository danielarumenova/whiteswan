<template>
  <v-app id="home">
    <NavBar />

    <v-container style="margin-top: 150px">
      <v-row align="left" justify="left" style="margin-top: 70px; font-family: 'Tilt Warp'">
        <h1>MERCH</h1>
        <br />
      </v-row>
      <v-row align="left" justify="left" style="margin-top: 15px">
        <h5>
          Go ahead and browse our collection of White Swan t-shirts,<br />
          and find the perfect one to show off your. We can't wait to<br />
          see you rocking your new t-shirt at our next event!
        </h5>
      </v-row>
      <v-row style="margin-top: 50px">
        <v-col>
          <div class="dropdown show">
            <a
              class="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <v-icon end icon="fa-solid fa-arrow-up-short-wide"></v-icon>
              Sort
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Newest</a>
              <a class="dropdown-item" href="#">Price(ASC)</a>
              <a class="dropdown-item" href="#">Price(DESC)</a>
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="dropdown show">
            <a
              class="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <v-icon end icon="fa-solid fa-filter"></v-icon>
              Filter
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item checkbox" href="#">Newest</a>
              <a class="dropdown-item" href="#">Price(ASC)</a>
              <a class="dropdown-item" href="#">Price(DESC)</a>
            </div>
          </div></v-col
        >
        <v-col
          ><div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><v-icon end icon="fa-brands fa-searchengin"></v-icon
              ></span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            /></div
        ></v-col>
        <v-col cols="7"></v-col>
      </v-row>

      <v-row style="margin-top: 50px;font-family: 'Tilt Warp'">
        <h1>THE LATEST ARIVALS</h1>
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
              {{ product.description }}
            </v-card-text>
            <v-card-text
              ><strong>Price:</strong> {{ product.price }} BGN
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="text-white"
                variant="flat"
                color="#531D5B"
                rounded="pill"
                :to="'/WhiteShirt/' + product.id"
                style="margin-left: 280px"
              >
                SHOP
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container style="margin-top: 150px">
      <v-row style="margin-top: 50px;font-family: 'Tilt Warp'">
        <h1>WHITE SWAN MERCH</h1>
      </v-row>

      <v-row style="margin-top: 50px">
        <v-col v-for="product in products.slice(3, 9)" :key="product.id" md="4">
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
              {{ product.description }}
            </v-card-text>
            <v-card-text
              ><strong>Price:</strong> {{ product.price }} BGN
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="text-white"
                variant="flat"
                color="#531D5B"
                rounded="pill"
                :to="'/WhiteShirt/' + product.id"
                style="margin-left: 280px"
              >
                SHOP
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      style="margin-top: 100px; margin-bottom: -115px; z-index: 9999"
    >
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
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import FooterView from "../components/FooterView.vue";
import axios from "axios";
export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    FooterView,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    let something = axios
      .get("https://63e68b1a7eef5b2233882583.mockapi.io/events/products")
      .then((response) => (this.products = response.data));
    console.log(something);
  },
  methods: {
    gotoFacebook() {
      window.open("https://www.facebook.com/wsent2k20");
    },
    gotoInsta() {
      window.open("https://www.instagram.com/white_swan_entertainment/");
    },
    addProductToCart(event) {
      this.$store.dispatch("addProductToCart", event);
    },
    added(number) {
      let btn = document.getElementById("buttonBuyNow" + number);

      btn.innerHTML = "ADDED TO CART";

      btn.style.backgroundColor = "green";
      setTimeout(function () {
        btn.innerHTML = "BUY NOW";
        btn.style.backgroundColor = "";
      }, 1500);
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

<style scoped></style>
