import { createSlice } from "@reduxjs/toolkit";

export const counrSlice = createSlice({
  name: "count",
  initialState: {
    cards: [],
    tot: 0
  },
  reducers: {
    AddItem: (state, action) => {
      state.cards.push(action.payload);
      state.tot += action.payload.price;
    },
    removeItem: (state, action) => {
      const index = state.cards.findIndex((ca) => ca.id === action.payload);
      if(index==-1)
      {
       alert("This item is not in the cart.");
        return;
      }
      if (index !== -1) {
        state.tot -= state.cards[index].price;
        state.cards.splice(index, 1);
      }
    }
  }
});

export const { AddItem, removeItem } = counrSlice.actions;
export default counrSlice.reducer;

