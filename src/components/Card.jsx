import React, { useState } from "react";
import { useCart, useDispatchCart } from "./Cartprovider";

export default function Card(props) {
  const dispatch = useDispatchCart();
  const cartState = useCart();
  const options = props.options;
  const priceoptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD_TO_CART",
      id: props.foodname.name,
      qty: qty,
      size: size,
      price: options[size],
    });
    console.log(cartState); // Assuming `cart` is the property containing the cart data
  };
  let finalPrice = qty * parseInt(options[size]); 
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            className="card-img-top"
            src={props.foodname.img}
            alt="chilli-paneer"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodname.name}</h5>
            <div className="container w-100">
              <select
                className="m-2 h-100 bg-success rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                className="m-2 h-100 bg-success rounded"
                onChange={(e) => setSize(e.target.value)}
              >
                {priceoptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
              <div className="d-inline h-100">₹{finalPrice}/-</div>
              <hr />
              <button
                className="btn btn-success justify-center ms-2"
                onClick={handleAddToCart}
              >
                Add_To_Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
