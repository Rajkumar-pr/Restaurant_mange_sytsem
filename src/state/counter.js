<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

export const counrSlice = createSlice({
  name: "count",
  initialState: {
    cards: [],
    tot: 0
  },
  reducers: {
    AddItem: (state, action) => {
      state.cards.push(action.payload); // ✅ Don't reassign `push` result
      state.tot += action.payload.price;
    },
    removeItem: (state, action) => {
      const index = state.cards.findIndex((ca) => ca.id === action.payload);
      if (index !== -1) {
        state.tot -= state.cards[index].price; // ✅ Update total
        state.cards.splice(index, 1); // ✅ Don't reassign, just modify
      }
    }
  }
});

// ✅ Correct way to export actions
export const { AddItem, removeItem } = counrSlice.actions;

// ✅ Export the reducer
export default counrSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

export const counrSlice = createSlice({
  name: "count",
  initialState: {
    cards: [],
    tot: 0
  },
  reducers: {
    AddItem: (state, action) => {
      state.cards.push(action.payload); // ✅ Don't reassign `push` result
      state.tot += action.payload.price;
    },
    removeItem: (state, action) => {
      const index = state.cards.findIndex((ca) => ca.id === action.payload);
      if (index !== -1) {
        state.tot -= state.cards[index].price; // ✅ Update total
        state.cards.splice(index, 1); // ✅ Don't reassign, just modify
      }
    }
  }
});

// ✅ Correct way to export actions
export const { AddItem, removeItem } = counrSlice.actions;

// ✅ Export the reducer
export default counrSlice.reducer;
>>>>>>> b2923ed75085a17916702d9fd8ef0d4092383c4b
