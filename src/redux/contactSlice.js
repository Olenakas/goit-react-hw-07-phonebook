import {createSlice} from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from "./operations";

const handlePending = state => {
    state.isLoading = true;
};


const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        deletingId: null,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, (state, action) => {
                console.log("action pending")
                console.log(action)
                state.deletingId = +action.meta.arg;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.deletingId = null;
                state.error = null;
                const index = state.items.findIndex(contact => +contact.id === +action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.deletingId = null;
                state.error = action.payload;
            });
    },
});


export const contactsReducer = contactSlice.reducer;