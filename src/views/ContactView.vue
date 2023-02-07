<template>
  <v-app id="home">
    <NavBar />
    <v-container
      style="margin-top: 150px; padding: 40px; border: 1px solid white"
    >
      <v-row>
        <v-col>
          <v-img src="@/assets/pictures/1.jpeg" cover></v-img>
        </v-col>

        <v-col>
          <h1 class="mt-8 text-white">Lets Party Together</h1>
          <v-divider></v-divider>
          <form @submit.prevent="sendEmail" id="contactForm">
            <v-text-field
              class="text-white"
              label="Name"
              persistent-hint
              v-model="name"
              name="name"
            ></v-text-field>

            <v-text-field
              label="Email"
              class="text-white"
              v-model="email"
              name="email"
              persistent-hint
            ></v-text-field>
            <v-textarea
              label="Message"
              class="text-white"
              persistent-hint
              name="message"
              v-model="message"
            ></v-textarea>
            <v-btn
              style="background: black"
              class="text-white"
              variant="outlined"
              type="submit"
              value="Send"
              id="sentButton"
              @click="myFunction"
              >Submit Now</v-btn
            >
          </form>
        </v-col>
      </v-row>
    </v-container>

    <FooterView />
  </v-app>
</template>

<script>
import emailjs from "emailjs-com";
import { defineComponent } from "vue";
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
      fab: false,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_hn7b7ni",
          "template_z31ybtq",
          e.target,
          "Ym49JG8SftpzW-z1J",
          {
            name: this.name,
            email: this.email,
            message: this.meessage,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.name = "";
      this.email = "";
      this.message = "";
    },
    myFunction() {
      alert("Thank you for the email");
    },
  },
});
</script>

<style scoped></style>
