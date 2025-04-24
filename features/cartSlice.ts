import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image';

interface Product {
  name: string;
  priceDollar: string;
  pricePK: string;
  imageUrl: StaticImageData[]; // Adjust if needed for single/multiple images
  quantity: number;
}

interface CartState {
  items: Product[];
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.name.replace(/\s+/g, '').toLowerCase() === action.payload.name.replace(/\s+/g, '').toLowerCase()
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
      state.totalQuantity += action.payload.quantity;
      state.totalAmount += parseFloat(action.payload.priceDollar.replace('$', '')) * action.payload.quantity;
      
      console.log("Added to cart", action.payload.name, existingItem)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.name.replace(/\s+/g, '').toLowerCase() === action.payload.replace(/\s+/g, '').toLowerCase()
      );
      if (itemIndex >= 0) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalAmount -= parseFloat(state.items[itemIndex].priceDollar.replace('$', '')) * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ name: string; quantity: number }>) => {
      const item = state.items.find(
        (item) => item.name.replace(/\s+/g, '').toLowerCase() === action.payload.name.replace(/\s+/g, '').toLowerCase()
      );
      if (item) {
        const oldQuantity = item.quantity;
        item.quantity = action.payload.quantity;
        state.totalQuantity += action.payload.quantity - oldQuantity;
        state.totalAmount +=
          (action.payload.quantity - oldQuantity) *
          parseFloat(item.priceDollar.replace('$', ''));
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
