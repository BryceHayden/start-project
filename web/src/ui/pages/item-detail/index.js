import React, { Component } from "react";
import CSSModules from "react-css-modules";
// import { Link } from "react-router-dom";

import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import { protectedRoute } from "../../../process/users/auth";

class ItemDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: {},
      amount: 1
    };
  }

  componentDidMount() {
    axiosWrapper
      .get(`/items/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ itemDetails: response.data.item });
      })
      .catch(err => {
        console.log("Something bad happened", err);
      });
  }

  addItemToCart = event => {
    event.preventDefault();
    this.props.updateCart(this.state.itemDetails.itemId, this.state.amount);
  };

  updateAmount = event => {
    event.preventDefault();
    this.setState({ amount: event.target.value });
  };

  render() {
    const { itemDetails } = this.state;
    if (!itemDetails.name) return <div>loading</div>;

    //refs
    return (
      <div>
        Here is some item {itemDetails.name}
        {itemDetails.price}
        <input
          type="number"
          value={this.state.amount}
          onChange={this.updateAmount}
        />
        <button onClick={this.addItemToCart}>Add to cart</button>
      </div>
    );
  }
}

export default protectedRoute(CSSModules(ItemDetailPage, css));
