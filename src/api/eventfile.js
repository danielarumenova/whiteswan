const _events = [
    {
        id: 1,
        name:"GET WET",
        description: 'Come and enjoy one of the biggest summer events with White Swan and DJ Cougar',
        date: 'July 16th',
        location: ' Hacienda Pool and Bar, Ruse, Bulgaria',
        urll: '/blackShirt',
        price: 20,
        quantityInStock: 20,
    },
   
]

export default {
    getEvents(cb) {
      setTimeout(() => cb(_events), 500)
    }
}
  