import React, { useState } from "react";
import { connect } from "react-redux";
import { IceAction } from "../Icecream/IceAction";

const Icecream = (props) => {
  const [decrease, setDecrease] = useState();
  const [error, setError] = useState("");

  const BuyIcecream = () => {
    if (decrease > props.Icecream_Quantity) {
      setError("Can't Buy Order, product is out of stock!");
    } else {
      props.IceAction(decrease);
      setError("");
    }
  };

  return (
    <div>
      <h3>No. of Icecreams: {props.Icecream_Quantity}</h3>
      <input
        type="number"
        value={decrease}
        onChange={(e) => setDecrease(e.target.value)}
      />
      <button onClick={BuyIcecream}>Buy_Icecream</button>
      <p style={{ color: "red", fontWeight: "800" }}>{error}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Icecream_Quantity: state.icecream.Icecream_Quantity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    IceAction: (value) => dispatch(IceAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Icecream);
