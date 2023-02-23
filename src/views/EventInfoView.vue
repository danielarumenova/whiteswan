<template>
  <v-app id="home">
    <NavBar />
    <v-container
      style="margin-top: 100px"
      v-for="event in eventToBeFetched"
      :key="event.id"
    >
      <v-row align="left" justify="left">
        <h1>{{ event.name }}</h1>
      </v-row>

      <v-row>
        <v-col cols="5">
          <v-img src="../assets/pictures/event1.jpg" cover></v-img>
        </v-col>

        <v-col>
          <v-row>
            <v-col cols="3">
              <v-card
                class="mx-auto"
                max-width="200px"
                height="150px"
                style="border: 1px solid black"
              >
                <v-card-title class="text-center"> Date </v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: 10px">
                  <v-icon color="black" class="mr-2"
                    >fa-sharp fa-regular fa-calendar</v-icon
                  ><br />
                  <br />
                  {{event.date}}
                </v-card-subtitle>
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-card
                class="mx-auto"
                max-width="200px"
                height="150px"
                style="border: 1px solid black"
              >
                <v-card-title class="text-center"> Time </v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: 10px">
                  <v-icon color="black" class="mr-2"
                    >fa-sharp fa-regular fa-clock</v-icon
                  ><br />
                  <br />
                  1:00PM
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card
                class="mx-auto"
                max-width="200px"
                height="150px"
                style="border: 1px solid black"
              >
                <v-card-title class="text-center"> Price </v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: 10px">
                  <v-icon color="black" class="mr-2"
                    >fa-solid fa-dollar-sign</v-icon
                  ><br />
                  <br />
                  {{ event.price }}
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card
                class="mx-auto"
                max-width="200px"
                height="150px"
                style="border: 1px solid black"
              >
                <v-card-title class="text-center"> Location </v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: 10px">
                  <v-icon color="black" class="mr-2"
                    >fas fa-map-marker-alt</v-icon
                  ><br />
                  <br />
                 {{ event.location }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row style="margin-top: 120px">
            Quantity left in stock: {{ event.quantityInStock }} <br />
          </v-row>
          <v-row style="margin-top: 30px">
            <v-btn
            class="text-white"
                  variant="flat"
                  color="#531D5B"
              rounded="lg"
              :id="'buttonBuyNowEvent'"
              width="150px"
              @click="
                addEventToCart(event);
                addedEvent(event.id);
              "
            >
              BUY NOW
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-container style="margin-top: 50px">
        <v-row><h1>About</h1></v-row>
        <v-row> {{ event.description }}</v-row>
      </v-container>
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
import axios from "axios";
import { defineComponent } from "vue";
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
      eventToBeFetched: [],
    };
  },
  mounted() {
    this.getEvent().then((res) => (this.eventToBeFetched = [res]));
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
      console.log(this.events, "events");
      btn.innerHTML = "ADDED TO CART";

      btn.style.backgroundColor = "green";
      setTimeout(function () {
        btn.innerHTML = "BUY NOW";
        btn.style.backgroundColor = "";
      }, 1500);
    },
    addEventToCart(event) {
      this.$store.dispatch("addEventToCart", event);
    },
    async getEvent() {
      try {
        let res = await axios({
          url:
            "https://63e68b1a7eef5b2233882583.mockapi.io/events/events/" +
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
  },
});
</script>

<style scoped>
#home {
  background-color: white;
}
</style>
