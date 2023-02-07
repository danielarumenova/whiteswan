const _products = [
    {
        id: 1,
        name:"White Swan T-Shirt in Black",
        size: 'M, XL, XXL',
        color: 'Black',
        price: '20',
        urll: '/blackShirt',
        picture:"../assets/pictures/black1.jpg",
        quantityInStock: 20,
    },
    {
        id: 2,
        name: 'White Swan T-Shirt in White',
        size: 'S, M, L',
        color: 'White',
        price: '20',
        urll: '/whiteShirt',
        picture:'../assets/pictures/white1.jpg',
        quantityInStock: 13,
    },

   
]

export default {
    getProducts(cb) {
      setTimeout(() => cb(_products), 500)
    }
}
  