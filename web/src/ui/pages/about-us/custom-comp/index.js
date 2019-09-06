import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import { arrayOf, shape, string } from "prop-types";

import css from "./index.css";

class MapLinks extends Component {
  static propTypes = {
    items: arrayOf(
      shape({
        firstName: string.isRequired
      })
    )
  };
  // props
  render() {
    if (!this.props.items.length) return <div>Loading....</div>;
    return this.props.items.map((item, index) => (
      <li key={index}>{this.props.render(item)}</li>
    ));
  }
}

export default CSSModules(MapLinks, css);
