export const getContacts = (state) => state.contacts.items
export const getFilter = (state) => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getDeletingId = state => state.contacts.deletingId;
export const getError = state => state.contacts.error;