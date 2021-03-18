<template>
  <div class="home">
    <h1>Your shoping Cart</h1>
    <order-list></order-list>
    <button class="btn-add" @click="addOrder">Add Order</button>
  </div>
</template>

<script>
import TheOrder from "../components/TheOrder";
import OrderList from "../components/OrderList";

export default {
  name: "Home",
  components: {
    TheOrder,
    OrderList,
  },
  methods: {
    addOrder() {
      this.$store.commit("addOrder");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-add {
  display: inline-block;
  position: relative;
  left: 350px;
  height: 100px;
  width: 100px;
  text-decoration: none;
  background: none;
  cursor: pointer;
  text-align: center;
  color: #3a0061;
  border: solid #3a0061 0.5px;
  border-radius: 10px;
  margin-bottom: 40px;
}

@media (max-width: 800px) {
  .btn-add {
    left: 0px;
    height: 80px;
    width: 480px;
  }
}
</style>
