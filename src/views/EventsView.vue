<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid style="margin-top: 150px" id="events">
      <v-row align="center" justify="center">
        <h1 class="">UPCOMMING EVENTS</h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 200px"
        v-for="event in events.slice(0,3)" :key="event.id"
      >
        <v-col style="margin-left: 20%">
          <v-img
            src="../assets/pictures/event1.jpg"
            cover
          ></v-img>
        </v-col>
        <v-col style="margin-right: 20%">
          <h2 class="">{{event.name}}</h2>
          <br />
          <p class="">
            {{event.description}}
          </p>
          <br />
          <p class=""><strong>Date: </strong>{{event.date}}</p>
          <br />
          <p class="">
            <strong>Location: </strong> {{event.location}}
          </p>
          <br />
          <p class="">
            <strong>Price : </strong> {{event.price}}
          </p>
          <br />
          <v-row align="center" justify="center">
            <v-btn class="" variant="outlined" @click="addEventToCart(event)"> BUY NOW </v-btn>
            <!-- <v-btn class="" variant="outlined" :to="event.urll" style="margin-left:10px"> MORE DETAILS </v-btn> -->
          
          </v-row>
        </v-col>
      </v-row>
    </v-container>


    <v-container fluid style="margin-top: 50px" id="events">
      <v-row align="center" justify="center">
        <h1 class="">PASSED EVENTS</h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        style="margin-top: 50px; margin-bottom: 200px"
        v-for="event in events.slice(3,15)" :key="event.id"
      >
        <v-col style="margin-left: 20%">
          <v-img
            src="../assets/pictures/event1.jpg"
            cover
          ></v-img>
        </v-col>
        <v-col style="margin-right: 20%">
          <h2 class="">{{event.name}}</h2>
          <br />
          <p class="">
            {{event.description}}
          </p>
          <br />
          <p class=""><strong>Date: </strong>{{event.date}}</p>
          <br />
          <p class="">
            <strong>Location: </strong> {{event.location}}
          </p>
          <br />
          <p class="">
            <strong>Price : </strong> {{event.price}}
          </p>
          <br />
          <v-row align="center" justify="center">
            <!-- <v-btn class="" variant="outlined" @click="addEventToCart(event)"> BUY NOW </v-btn> -->
            <!-- <v-btn class="" variant="outlined" :to="event.urll" style="margin-left:10px"> MORE DETAILS </v-btn> -->
          
          </v-row>
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
      events:[]
    }
  },
  mounted () {
    let something = axios
      .get('https://63e68b1a7eef5b2233882583.mockapi.io/events/events')
      .then(response => (this.events = response.data)).catch(error => {
      throw error;
    })
      console.log(something)
  },
  methods: {
    addEventToCart(event) {
        this.$store.dispatch('addEventToCart', event)
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
