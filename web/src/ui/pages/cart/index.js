import React, { Component } from "react";
// import CSSModules from "react-css-modules";
// import { Link } from "react-router-dom";

// import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import { protectedRoute } from "../../../process/users/auth";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      orderCompleted: false
    };
  }
  
  componentDidMount() {
    axiosWrapper.get("/carts/items").then(response => {
      this.setState({ items: response.data.cart });
    });
  }

  placeOrder = event => {
    event.preventDefault();
    axiosWrapper.post("/orders/add", {}).then(response => {
      console.log("ORDER HAS BEEN PLACED", response);
      this.setState({ orderCompleted: true });
    });
  };

  render() {
    const { items, orderCompleted } = this.state;

    if (orderCompleted) {
      return <div>Order Placed</div>;
    }

    return (
      <div>
        Here are the items in our cart
        {items.map((item, index) => (
          <div key={index}>
            {item.name} : {item.price} : {item.quantity} :{" "}
            {item.price * item.quantity}
          </div>
        ))}
        <button onClick={this.placeOrder}>Order</button>
      </div>
    );
  }
}

export default protectedRoute(CartPage);
