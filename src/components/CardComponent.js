import React from "react";
import ButtonComponent from "./ButtonComponent";

const CardComponent = (props) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const CardType = (type) => {
    if (type === "detail") {
      return (
        <>
          <input type="number" class="form-control" id="exampleInputPassword1" placeholder="1" />
          <ButtonComponent label="Add to cart" OnClick={props.OnCart} />
        </>
      );
    } else if (type === "admin") {
      return (
        <>
          {/* <Subheadline label="Update Stocks" /> */}
          <h1>Update Stock</h1>
          <ButtonComponent label="+1" OnClick={props.OnPlus} />
          <ButtonComponent label="-1" OnClick={props.OnMinus} />
        </>
      );
    } else {
      return (
        <>
          <ButtonComponent label="View Details" buttonIcon="no-icon" OnClick={props.OnView} />
          <ButtonComponent label="Add to cart" buttonIcon="plus" type="fill" OnClick={props.OnCart} />
        </>
      );
    }
  };
  return (
    <div class="container">
      <div class="card">
        <img src={props.image} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <h6 className="card-title">{props.category}</h6>
          <p class="card-text">{props.description}</p>
          <h2>{formatter.format(props.price)}</h2>
          <h5 class="card-title">{`Stock: ${props.quantity}`}</h5>
          <div class="action">{CardType(props.type)}</div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
