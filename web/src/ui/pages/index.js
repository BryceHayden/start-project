// import omit from 'lodash/omit'
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../utilities/axios/wrapper";

import css from "./index.css";
import Header from "../components/header";
import Footer from "../components/footer";

import Landing from "./landing";
import Home from "./homepage/";
import Login from "./login/";
import SignOut from "./sign-out";
import AboutUs from "./about-us";
import ItemDetail from "./item-detail";
import Profile from "./profile";
import Cart from "./cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // numOfItemsInCart: 0,
      error: false
    };
  }

  // componentDidMount() {
  //   axiosWrapper.get("/carts/items").then(response => {
  //     this.setState({ numOfItemsInCart: response.data.cart.length });
  //   });
  // }

  // updateCart = (itemId, quantity) => {
  //   axiosWrapper
  //     .post("/carts/add", { items: [{ id: itemId, quantity }] })
  //     .then(res => {
  //       console.log("Response from the backend", res);
  //       this.setState({ numOfItemsInCart: res.data.cart.numOfItemsInCart });
  //     })
  //     .catch(err => {
  //       console.log(`Something bad happened...handle it: ${err}`);
  //     });
  // };

  render() {
    return (
      <div styleName="App">
        {/* <div styleName="header-container">
          <Header numOfItemsInCart={this.state.numOfItemsInCart} />
        </div> */}
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/profile" component={Profile} />,
            <Route exact path="/login" component={Login} />,
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/sign-out" component={SignOut} />
            {/* Four create the page to see the items in our cart */}
            {/* <Route exact path="/cart" component={Cart} />
            <Route
              exact
              path="/items/:id"
              render={({ match }) => (
                <ItemDetail match={match} updateCart={this.updateCart} />
              )}
            /> */}
          </Switch>
        </div>
        {/* <div styleName="footer-container">
          <Footer />
        </div> */}
      </div>
    );
  }
}

export default CSSModules(App, css);
