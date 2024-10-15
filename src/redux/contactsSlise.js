import { createSlice } from "@reduxjs/toolkit";

const initState = {
  contacts: {
    item: [],
  },
};

const slice = createSlice({
  name: "contacts",
  initState,
  reducer: {
    addContact: (state, action) => {
      state.contacts.item.push(action.payload);
    },
    delContact: (state, action) => {
      state.contacts.item = state.contacts.item.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contacts.contacts.item;
export const contactReducer = slice.reducer;
export const { addContact, delContact } = slice.actions;
