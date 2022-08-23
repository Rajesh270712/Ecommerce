export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const  ADD_TO_CART= "ADD_TO_CART";
export const  REMOVE_FROM_CART= "REMOVE_FROM_CART";
export const  HANDLE_QUANTITY_CHANGE= "HANDLE_QUANTITY_CHANGE";

export const addProducts = (payload) => {
  return {
    type: ADD_PRODUCTS,
    payload,
  };
};

export const addToCART = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};
export const handleQuantityChange = (payload) => {
  return {
    type: HANDLE_QUANTITY_CHANGE,
    payload,
  };
};
