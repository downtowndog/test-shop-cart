<template>
  <div class="list">
    <h2 v-if="$store.state.orders.length === 0">No items in your 🛒</h2>
    <the-order
      class="order"
      v-for="order in $store.state.orders"
      :key="order.id"
      :id="order.id"
      :name="order.name"
      :status="order.isConfirmed"
      :price="order.price"
      :quantity="order.quantity"
      :totalPrice="order.totalPrice"
    ></the-order>
  </div>
</template>

<script>
import TheOrder from "../components/TheOrder";

export default {
  components: {
    TheOrder,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.order {
  margin-bottom: 25px;
}
</style>
