import { createSlice } from "@reduxjs/toolkit";

const initState = {
  contacts: {
    item: [],
  },
};

const slice = createSlice({
  name: "contacts",
  initState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.item.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contacts.contacts.items;

export const contactReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
