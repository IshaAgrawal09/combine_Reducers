import React, { useState } from "react";
import { connect } from "react-redux";
import { CakeAction } from "../Cake/CakeAction";

const Cake = (props) => {
  const [decrease, setDecrease] = useState();
  const [error, setError] = useState("");

  const buyCake = () => {
    if (decrease > props.Cake_Quantity) {
      setError("Can't Buy Order, product is out of stock!");
    } else {
      props.CakeAction(decrease);
      setError("");
    }
  };
  return (
    <div>
      <h3>Number of Cakes: {props.Cake_Quantity}</h3>
      <input
        type="number"
        value={decrease}
        onChange={(e) => setDecrease(e.target.value)}
      />
      <button onClick={buyCake}>Buy_Cake</button>
      <p style={{ color: "red", fontWeight: "800" }}>{error}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    Cake_Quantity: state.cake.Cake_Quantity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    CakeAction: (value) => dispatch(CakeAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
