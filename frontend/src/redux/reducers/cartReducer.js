const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add cases to handle cart actions (e.g., ADD_TO_CART, REMOVE_FROM_CART)
    default:
      return state;
  }
};

export default cartReducer;