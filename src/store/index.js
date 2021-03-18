import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addingOrderProcesActive: false,
    orders: [
      {
        id: 0,
        isConfirmed: true,
        name: "iPhone 11 Pro Max",
        price: 900,
        quantity: 3,
        totalPrice: 2700,
      },
    ],
  },
  mutations: {
    startEdit(state, id) {
      let obj = state.orders.find(order => order.id === id);
      obj.isConfirmed = false;
    },
    stopEdit(state, id) {
      let obj = state.orders.find(order => order.id === id);
      obj.isConfirmed = true;
    },
    deleteOrder(state, id) {
      let idx = state.orders.findIndex(order => order.id === id);
      if (confirm('Are you sure')) {
        state.orders.splice(idx, 1);  
      };
    },
    addOrder(state) {
      state.orders.push({
        id: Date.now(),
        isConfirmed: false,
        title: 'No data',
        price: null,
        quantity: null,
        totalPrice: 0,
      })
    },
    setNewValues(state, newValues) {
      let obj = state.orders.find(order => order.id === newValues.id);
      obj.name = newValues.newName;
      obj.price = newValues.newPrice;
      obj.quantity = newValues.newQuantity;
      obj.totalPrice = newValues.newTotalPrice;
      obj.isConfirmed = true;
      console.log(obj);
    }
  },
  actions: {
  },
  modules: {
  }
})
