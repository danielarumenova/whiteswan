<template>
  <v-app id="home">
    <NavBar />

    <v-container
      style="margin-top: 150px"
      v-for="product in productToBeFetched"
      :key="product.id"
    >
      <v-row align="center" justify="center">
        <v-col style="margin-left: 20%">
          <v-carousel>
            <v-carousel-item
              src="../assets/pictures/white1.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="../assets/pictures/white2.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col style="margin-right: 20%">
          <h2 class="">{{ product.name }}</h2>
          <br />
          <v-select
            class=""
            label="Size"
            :items="['XS', 'S', 'M', 'L', 'XL', 'XXL']"
          ></v-select>
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <a
                class="text-black"
                style="border-bottom: 1px solid white"
                v-bind="props"
              >
                View Measurements Chart
              </a>
            </template>

            <v-card style="background: black">
              <v-img src="../assets/pictures/sizes.png" cover></v-img>
              <v-card-actions>
                <v-btn variant="flat" block @click="dialog = false"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>

          <h4 style="margin-top: 50px">COLOR: {{ product.color }}</h4>
          <br />
          <h4>Materials: cotton</h4>
          <v-row align="center" justify="center" style="margin-top: 60px">
            <h4 class="text-left" style="margin-right: 140px">
              Price:{{ product.price }} BGN
            </h4>
            <div class="container">
              <v-btn
              class="btn my-2 text-white"
                id="buttonBuyNow"
                width="150px"
                  variant="flat"
                  color="#531D5B"
              rounded="lg"
                @click="
                  addProductToCart(product);
                  added(product.id);
                "
                >BUY NOW
              </v-btn>
            </div>
          </v-row>
        </v-col>
      </v-row>
      <v-container style="margin-top: 50px">
        <v-row><h1>Product Information</h1></v-row>
        <v-row> </v-row>
      </v-container>
    </v-container>

    <v-container fluid style="margin-top: 50px" id="shop">
      <v-row align="center" justify="center">
        <h1 class="">Similar Items</h1>
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
              <v-btn
              class="text-white"
                variant="flat"
                color="#531D5B"
                rounded="pill"
                :to="'/BlackShirt/' + product.id"
                style="margin-left: 360px"
              >
                SHOP
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn class="text-white" variant="flat" rounded="pill" color="#302A77" to="/shop" style="margin-left: 10px">
          SHOP MORE >
        </v-btn>
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
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import FooterView from "../components/FooterView.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    FooterView,
  },
  props: ["id"],
  data() {
    return {
      clicked: false,
      msg1: "ADDED TO CART",
      products: [],
      productToBeFetched: [],
      dialog: false,
    };
  },
  mounted() {
    this.getProduct().then((res) => (this.productToBeFetched = [res]));
    let products = axios
      .get("https://63e68b1a7eef5b2233882583.mockapi.io/events/products")
      .then((response) => (this.products = response.data));
    console.log(products);
  },
  methods: {
    gotoFacebook() {
      window.open("https://www.facebook.com/wsent2k20");
    },
    gotoInsta() {
      window.open("https://www.instagram.com/white_swan_entertainment/");
    },
    added() {
      let btn = document.getElementById("buttonBuyNow");
      console.log(this.products, "products");
      btn.innerHTML = "ADDED TO CART";

      btn.style.backgroundColor = "green";
      setTimeout(function () {
        btn.innerHTML = "BUY NOW";
        btn.style.backgroundColor = "";
      }, 1500);
    },
    reloadPage() {
      window.location.reload();
    },
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
    async getProduct() {
      try {
        let res = await axios({
          url:
            "https://63e68b1a7eef5b2233882583.mockapi.io/events/products/" +
            this.id,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status == 200) {
          console.log(res.status);
        }
        return res.data;
      } catch (err) {
        console.error(err);
      }
    },
    handleClick(product) {
      const prd = {
        id: product.id,
        name: product.name,
        color: product.color,
        price: product.price,
        description: "pass data through params",
      };
      console.log(prd);
      this.$router.push({
        name: "BlackShirt", //use name for router push
        params: {
          myProperty: JSON.stringify(prd),
        },
      });
    },
  },
});
</script>

<style scoped>
#home {
  background-color: white;
}
</style>
