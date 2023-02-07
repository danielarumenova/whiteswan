<template>
    <v-container>
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
              <td class="text-white bg-black">{{product.title}}</td>
              <td class="text-white bg-black">{{product.price}}</td>
              <td class="text-white bg-black">
                  <input v-model.number="product.quantity" min="1" :max="product.newQuantityInStock" type="number" id="quantity" class="form-control w-75 d-block text-white bg-black" >
              </td>
              <td class="text-white bg-black">BGN {{product.price *  product.quantity}}</td>
              <td class="text-white bg-black">
                  <i @click="removeProduct(product)" id="delete-item" class="fas fa-window-close text-danger fa-2x d-block ms-4"></i>
              </td>
              </tr>
            </tbody>
          </v-table>
        </div> 
        <div v-if="!products.length">
          <p class="text-white" style="margin-top:50px">No item in your cart!</p>
        </div>
        <div style="margin-top:150px">
          <div v-if="products.length>0" class="">
            <p class="text-white"><span class="text-white">Total:</span>  BGN {{total}}</p>
            <v-row>
              <v-col>
            <v-btn class="text-white" variant="outlined" @click="removeCartProducts()">
              <i class="fas fa-trash"></i> Empty Cart
            </v-btn>
          </v-col>
          <v-col align="right" justify="right">
            <v-btn class="text-white" variant="outlined" to="/order">
              <i class="fas fa-truck"></i> Order now
            </v-btn>
          </v-col>
          </v-row>
          </div>
          <v-divider></v-divider>
          <v-btn class="text-white" variant="outlined" to="/" ><i class="fas fa-space-shuttle mr2"></i>Continue Shopping</v-btn>
        </div>
    </v-container>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CheckoutView",
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
  },
});
</script>

<style scoped>

</style>