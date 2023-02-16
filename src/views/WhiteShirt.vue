<template>
  <v-app id="home">
    <NavBar />

    <v-container style="margin-top: 150px">
      <v-row
        align="center"
        justify="center"
        v-for="product in products"
        :key="product.id"
      >
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
          <h2 class="text-white">{{product.name}}</h2>
          <h4 class="text-white">{{ product.price }} BGN</h4>
          <h4 class="text-white">COLOR: {{ product.color }} </h4>
          <br />
          <v-select
            class="text-white"
            label="Size"
            :items="['XS', 'S', 'M', 'L', 'XL', 'XXL']"
          ></v-select>
          <br />
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <a
                class="text-white"
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
          <br />
          <br />
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title
                color="black"
                class="text-white"
                style="background: black; border-bottom: 1px solid white"
              >
                Information about the product
              </v-expansion-panel-title>
              <v-expansion-panel-text
                style="background: black"
                class="text-white"
              >
                After obtaining the completed brief and all other materials for
                the project, work can begin. The stage includes a discussion of
                the project's goals, methods for achieving them, and technical
                issues.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <br />
          <v-row align="center" justify="center" style="margin-top: 60px">
            <div class="container">
              <v-btn
                class="text-white btn my-2"
                id="buttonBuyNow"
                width="150px"
                variant="outlined"
                @click="addProductToCart(product);added(product.id)"
                >BUY NOW
              </v-btn>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <div
      style="
        border-top: 3px solid #bbb;
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 100px;
      "
    ></div>

    <v-container fluid style="margin-top: 50px" id="events">
      <v-row align="center" justify="center">
        <h1 class="text-white">Similar Items</h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 200px"
      >
        <v-col style="margin-left: 20%">
          <v-card
            class="mx-auto text-white"
            max-width="450"
            height=""
            style="padding: 40px; background: black"
          >
            <v-img
              src="../assets/pictures/black1.jpg"
              height="200px"
              cover
            ></v-img>

            <v-card-title>White Swan Shirt in Black </v-card-title>

            <v-card-text
              align="center"
              justify="center"
              style="margin-top: 30px"
            >
              <v-btn class="text-white" variant="outlined" to="/blackShirt">
                SEE MORE
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col style="margin-right: 20%">
          <v-card
            class="mx-auto text-white"
            max-width="450"
            height=""
            style="padding: 40px; background: black"
          >
            <v-img
              src="../assets/pictures/random.jpg"
              height="200px"
              cover
            ></v-img>

            <v-card-title>White Swan Shirt in Random </v-card-title>

            <v-card-text
              align="center"
              justify="center"
              style="margin-top: 30px"
            >
              <v-btn class="text-white" variant="outlined" to="/blackShirt">SEE MORE </v-btn>
            </v-card-text>
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
  data() {
    return {
      clicked: false,
      msg1: "ADDED TO CART",
      products:[],
      dialog: false,
    };
  },
  mounted() {
    async function getData() {
      try {
        let res = await axios({
          url: "https://63e68b1a7eef5b2233882583.mockapi.io/events/products/50",
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
    }

    getData().then((res) => (this.products = [res]));
  },
  methods: {
    added() {
      let btn = document.getElementById("buttonBuyNow");
      console.log(this.products,'products')
      btn.innerHTML = "ADDED TO CART";

      btn.style.backgroundColor = "green";
      setTimeout(function () {
        btn.innerHTML = "BUY NOW";
        btn.style.backgroundColor = "";
      }, 1500);
    },
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
});
</script>

<style scoped>
#home {
  background-color: black;
}
</style>
