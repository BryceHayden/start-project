import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";

import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import { protectedRoute } from "../../../process/users/auth";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/items")
      .then(response => {
        this.setState({ items: response.data.items });
      })
      .catch(err => {
        console.log("Something bad happened", err);
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        this is our landing page
        {items.map((item, index) => (
          <div key={index}>
            <Link to={`/items/${item.itemId}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default protectedRoute(CSSModules(LandingPage, css));
