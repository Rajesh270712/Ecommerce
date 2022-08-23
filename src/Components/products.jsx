import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, addToCART, removeFromCart } from "../Redux/state";
import { Cart } from "./cart";

export const Products = () => {
  const dispatch = useDispatch();
  const { products, cart } = useSelector((state) => state);
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    let data = await fetch("https://fakestoreapi.com/products");
    let res = await data.json();
    dispatch(addProducts(res));
  }

  function addProductInCart(product) {
    product.quantity = 1
    dispatch(addToCART(product));
    console.log(cart);
  }
  function removeProductFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div
        style={{
          width: "80%",
          justifyContent: "space-evenly",
        }}
      >
        <center><h1>Product</h1></center>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "space-evenly",
          }}
        >
          {products?.map((item) => (
            <div
              key={item.id}
              style={{
                width: "20%",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{ width: "100%", height: "200px" }}
              />

              <h4>{item.title}</h4>
              <h5> $ {item.price}</h5>
              {cart.some((element) => element.id == item.id) ? (
                <button
                  style={{ width: "100%", backgroundColor: "red" }}
                  onClick={() => removeProductFromCart(item.id)}
                >
                  REMOVE FROM CART
                </button>
              ) : (
                <button
                  style={{ width: "100%", backgroundColor: "green" }}
                  onClick={() => {
                    addProductInCart(item);
                  }}
                >
                  ADD TO CART
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <Cart cart={cart} />
    </div>
  );
};
