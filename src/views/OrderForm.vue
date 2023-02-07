<template>
  <v-app id="home">
    <NavBar />
    <v-container style="margin-top: 150px">
      <v-row>
        <v-col>
          <v-container style="margin-top:150px; padding: 40px; border:1px solid white;">
            <h1 class="text-white">Your Cart</h1>
            <div class="overflow-auto">
              <v-table class="f6 w-100 mw8 center" cellspacing="0">
                <thead>
                  <tr>
                    <th class="fw6 tl pa3 text-white bg-black">Product</th>
                    <th class="fw6 tl pa3 text-white bg-black">Price</th>
                    <th class="fw6 tl pa3 text-white bg-black">Quantity</th>
                    <th class="fw6 tl pa3 text-white bg-black">Total</th>
                    <th class="fw6 tl pa3 text-white bg-black"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.id">
                    <td class="text-white bg-black">{{ product.title }}</td>
                    <td class="text-white bg-black">{{ product.price }}</td>
                    <td class="text-white bg-black">
                      <input
                        v-model.number="product.quantity"
                        min="1"
                        :max="product.newQuantityInStock"
                        type="number"
                        id="quantity"
                        class="form-control w-75 d-block text-white bg-black"
                      />
                    </td>
                    <td class="text-white bg-black">
                      BGN {{ product.price * product.quantity }}
                    </td>
                    <td class="text-white bg-black">
                      
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </v-container>
        </v-col>

        <v-col>
            <v-container style="margin-top:150px; padding: 40px; border:1px solid white;">
        <v-row>
            <v-col>
                <h1 class="mt-8 text-white">Enter your details below</h1>
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
            <v-text-field
              label="Phone"
              class="text-white"
              v-model="phone"
              name="phone"
              persistent-hint
            ></v-text-field>
            <v-textarea
              label="Ekont Office"
              class="text-white"
              persistent-hint
              name="ekont-office"
              v-model="ekontOffice"
            ></v-textarea>
            <v-btn style="background: black"
                class="text-white"
                variant="outlined" type="submit" value="Send" id="sentButton" @click="myFunction" >Submit Now</v-btn>
            </form>
            </v-col>
        </v-row>
      </v-container>
        </v-col>
      </v-row>
    </v-container>
    <FooterView />
  </v-app>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import emailjs from "emailjs-com";
import FooterView from "../components/FooterView.vue";
export default {
  name: "OrderForm",
  components: {
    NavBar,
    FooterView,
  },
  data() {
    return {
      fab: false,
      name: "",
      email: "",
      phone:"",
      ekontOffice: "",
    };
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
    cartNumber() {
      return this.$store.getters.cartIteming;
    },
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
    removeCartProducts() {
      this.$store.dispatch("removeCartProducts");
    },
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_hn7b7ni",
          "template_8hw2f2k",
          e.target,
          "Ym49JG8SftpzW-z1J",
          {
            name: this.name,
            email: this.email,
            phone: this.phone,
            ekontOffice: this.ekontOffice,
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
};
</script>
