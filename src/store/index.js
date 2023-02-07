import { createStore } from 'vuex'
import shop from '@/api/productfile'
import eventShop from '@/api/eventfile'


export default createStore({
  state: {
   products: [],
   events:[],
   cart: []
  },
  getters: {
    availableProducts (state) {
      return state.products
    },

    availableEvents (state) {
      return state.events
    },

    cartProducts (state) {
      return state.cart
    },

    cartEvents (state) {
      return state.cart
    },
    
    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0)
    },
    
    cartIteming(state){
      return state.cart.length
    }

  },
  mutations: {
    setProducts (state,products){
      state.products = products
    },
    setEvents (state,events){
      state.events = events
    },

    pushProductToCart (state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1,
        title: product.name,
        price: product.price,
        productprice: product.price,
        newQuantityInStock: product.quantityInStock
      })
    },
    pushEventToCart (state, event) {
      state.cart.push({
        id: event.id,
        quantity: 1,
        title: event.name,
        price: event.price,
        productprice: event.price,
        newQuantityInStock: event.quantityInStock
      })
    },
    popProductFromCart(state){
      state.cart.pop()
    },
    removeAllProducts(state){
      state.cart = []
    },
    incrementProductInventory (state, product) {
      product.quantityInStock--
    },
    incrementEventInventory (state, event) {
      event.quantityInStock--
    },
    incrementItemQuantity (state, cartItem) {
      const product = state.products.find(product => product.id === cartItem.id)
      cartItem.quantity++
      product.quantityInStock--
      cartItem.productprice = cartItem.quantity * product.price
    }


  },
  actions: {
    fetchProducts ({commit}) {
      return new Promise((resolve) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    fetchEvents ({commit}) {
      return new Promise((resolve) => {
        eventShop.getEvents(events => {
          commit('setEvents', events)
          resolve()
        })
      })
    },
    addProductToCart (context, product) {
      if (product.quantityInStock > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          context.commit('pushProductToCart', product)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }

      }
    },
    addEventToCart (context, event) {
      if (event.quantityInStock > 0) {
        const cartItem = context.state.cart.find(item => item.id === event.id)
        if (!cartItem) {
          context.commit('pushEventToCart', event)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }

      }
    },
    removeProduct (context, product) {
      context.commit('popProductFromCart', product.id)
      context.commit('incrementProductInventory', product)
    },
    removeEvent (context, event) {
      context.commit('popEventFromCart', event.id)
      context.commit('incrementEventInventory', event)
    },
    removeCartProducts(context){
      context.commit('removeAllProducts')
    }

  },
  modules: {
  }
})
