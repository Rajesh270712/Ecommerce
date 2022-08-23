import { ADD_PRODUCTS, ADD_TO_CART, HANDLE_QUANTITY_CHANGE, REMOVE_FROM_CART } from "./state";

const initState = {
  products: [],
  cart: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCTS: {
      return {
        ...state,
          products : [...payload],
      };
    }
    case ADD_TO_CART : {
      return {
        ...state,
        cart : [...state.cart , payload]
      }
    }
    case REMOVE_FROM_CART :{
      return{
        ...state,
        cart :  state.cart.filter((item)=>item.id!==payload  )
      }
    }
    case HANDLE_QUANTITY_CHANGE :{
      return{
        ...state,
        cart : state.cart.map((item)=>{ return (item.id==payload.id) ? [...state.cart,item={...item,quantity:+(item.quantity)+payload}] : item.quantity })
      }
    }
    default:
      return state;
  }
};
