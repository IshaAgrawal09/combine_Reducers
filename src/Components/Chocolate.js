import React, { useState } from "react";
import { connect } from "react-redux";
import { ChocoAction } from "../Chocolate/ChocoAction";

const Chocolate = (props) => {
  const [decrease, setDecrease] = useState();
  const [error, setError] = useState("");

  const BuyChocolate = () => {
    if (decrease > props.choco_Quantity) {
      setError("Can't Buy Order, product is out of stock!");
    } else {
      props.ChocoAction(decrease);
      setError("");
    }
  };

  return (
    <div>
      <h3>No. of Chocolates: {props.choco_Quantity}</h3>
      <input
        type="number"
        value={decrease}
        onChange={(e) => setDecrease(e.target.value)}
      />

      <button onClick={BuyChocolate}>Buy_Chocolate</button>
      <p style={{color: 'red', fontWeight: '800'}}>{error}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    choco_Quantity: state.chocolate.choco_Quantity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ChocoAction: (value) => dispatch(ChocoAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chocolate);
