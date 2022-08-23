import { useDispatch, useSelector } from "react-redux";
import { handleQuantityChange } from "../Redux/state";

export const Cart = () => {
    let {cart} = useSelector(state=>state);
  const dispatch = useDispatch();
  return (
    <div>
      <center><h1>Cart</h1></center>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {cart?.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", border: "1px solid black", padding:"5px" , gap: "40px" }}
          >
            <div style={{ width: "40%" }}>
              <img
                style={{ width: "100px", height: "100px" }}
                src={item.image}
                alt=""
              />
            </div>
            <div>
              <p> $ {item.price}</p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <button
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button 
                > -</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
