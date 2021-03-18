<template>
  <div class="container">
    <div class="order order--picture">Picture</div>
    <span v-if="status" class="order-name">{{ name }}</span>
    <input class="input__name" v-else type="text" v-model="title" />
    <section class="order-info">
      <div class="order-info-item order-info__price">Price</div>
      <div class="order-info-item order-npm">Quantity</div>
      <div class="order-info-item order-info__total">Total</div>
    </section>
    <section class="order-value">
      <div v-if="status" class="order-value-item">{{ price + `$` }}</div>
      <input v-else class="input__item" type="number" v-model="itemPrice" />
      <div v-if="status" class="order-value-item">{{ quantity }}</div>
      <input v-else class="input__item" type="number" v-model="itemQuantity" />
      <div class="order-value-item">{{ this.itemTotalPrice + `$` }}</div>
    </section>
    <div v-if="status" class="status_confirmed">Confirmed ✅</div>
    <button v-if="status" @click="startEdit" class="btn flat btn__change">
      Change
    </button>
    <button v-else @click="setNewValues" class="btn flat btn__change">
      Save
    </button>
    <button v-if="status" @click="deleteOrder" class="btn flat btn__delete">
      Delete
    </button>
    <button v-else @click="stopEdit" class="btn flat btn__delete">
      Cancel
    </button>
  </div>
</template>

<script>
export default {
  props: ["name", "id", "status", "price", "quantity", "totalPrice"],
  data() {
    return {
      title: this.name,
      itemPrice: this.price,
      itemQuantity: this.quantity,
      itemTotalPrice: this.totalPrice,
    };
  },

  methods: {
    startEdit() {
      this.$store.commit("startEdit", this.id);
    },
    stopEdit() {
      this.$store.commit("stopEdit", this.id);
    },
    deleteOrder() {
      this.$store.commit("deleteOrder", this.id);
    },
    setNewValues() {
      this.itemTotalPrice = this.itemPrice * this.itemQuantity;
      this.$store.commit("setNewValues", {
        id: this.id,
        newName: this.title,
        newPrice: this.itemPrice,
        newQuantity: this.itemQuantity,
        newTotalPrice: this.itemTotalPrice,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 145px;
  width: 480px;

  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 40rem;
}

.order {
  &--picture {
    position: absolute;
    left: 10px;
    top: 10px;
    height: 120px;
    width: 120px;
    text-align: center;
    line-height: 120px;
    color: #3a0061;
    border: solid #3a0061 1px;
    border-radius: 10px;
  }
}
.order-name,
.input__name {
  color: darkslategray;
  font-weight: 700;
  position: absolute;
  top: 10px;
  left: 250px;
  transform: translateX(-50%);
  padding: 5px;
  width: 210px;
  border-radius: 5px;
  border: solid #3a0061 1px;
  text-align: center;
}
.order-info {
  color: darkslategray;
  position: absolute;
  top: 45px;
  left: 140px;
  width: 100px;
  text-align: start;
}
.order-info-item {
  margin: 6px;
}
.order-value-item {
  margin: 6px;
}
.order-value {
  font-weight: 700;
  color: darkslategray;
  position: absolute;
  top: 45px;
  left: 240px;
  width: 100px;
  text-align: start;
}

.btn {
  position: absolute;
  padding: 4px;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #270041;
    border-color: #270041;
  }

  &__change {
    left: 345px;
    top: 112px;
  }

  &__delete {
    left: 410px;
    top: 112px;
  }
}
.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
.status_confirmed {
  font-size: 14px;
  display: inline-block;
  position: absolute;
  top: 15px;
  left: 380px;
}

input {
  display: inline-block;
  font: inherit;
  color: darkslategray;
}

input:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.input__item {
  width: 100%;
  margin: 1px 6px;
  padding: 0;
}
</style>
