import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the cart slice
const initialState = {
  cart: [],

  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

// Create the cartSlice
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem(state, action) {
      // Payload = the new item to add to the cart
      state.cart.push(action.payload);
    },

    removeItem(state, action) {
      // Payload = the pizzaId of the item to remove
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseItemQuantity(state, action) {
      // Payload = the pizzaId of the item to update
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      // Increase the found item's quantity
      item.quantity++;

      // Recalculate the item's total price
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseItemQuantity(state, action) {
      // Payload = the pizzaId of the item to update
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      // Decrease the item's quantity
      item.quantity--;

      // Recalculate the item's total price
      item.totalPrice = item.quantity * item.unitPrice;
    },

    clearCart(state) {
      // Remove all items from the cart
      state.cart = [];
    },
  },
});

// createSlice automatically generates one action creator for each reducer.
// Since we defined 5 reducers above, createSlice generates 5 action creators.
export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// Export the reducer function to be added to the Redux store
export default cartSlice.reducer;

/* ------------------------------ 
  Redux selector functions 
------------------------------- */
export const getUsername = (state) => state.user.username;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

// First fnc receives the ID, second fnc receives the Redux state & returns the qty for that pizza.
// This allows us to pass an argument to a selector used with useSelector.
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((itemObj) => itemObj.pizzaId === id)?.quantity ?? 0;
