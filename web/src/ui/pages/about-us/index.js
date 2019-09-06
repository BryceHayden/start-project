import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import { Button, Header, Image, Modal } from "semantic-ui-react";

import Spotlight from "./spotlight";
import MapLinks from "./custom-comp";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: [],
      originalSettingsForCreator: {},
      tempCreatorUsedForUpdating: {}
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/items/123")
      .then(response => {
        console.log("about us response", response);
        this.setState({ creators: response.data.creators });
      })
      .catch(err => {
        console.log("Error fetching daily message");
      });
  }
  fetchCreatorDetails = (event, userhandle) => {
    event.preventDefault();
    axiosWrapper
      .get(`/creators/${userhandle}`)
      .then(response => {
        console.log("spotligh response", response);
        this.setState({
          originalSettingsForCreator: response.data.creator,
          tempCreatorUsedForUpdating: response.data.creator
        });
      })
      .catch(err => {
        console.log("Error fetching daily message");
      });
  };

  updateCreator = event => {
    event.preventDefault();
    this.setState({
      tempCreatorUsedForUpdating: {
        ...this.state.tempCreatorUsedForUpdating,
        firstName: event.target.value
      }
    });
  };

  submitCreatorUpdate = (event, userhandle) => {
    event.preventDefault();
    axiosWrapper
      .put(``, {
        creator: this.state.tempCreatorUsedForUpdating
      })
      .then(response => {
        console.log("updated creator response", response);
        const { creator } = response.data;
        this.setState({
          originalSettingsForCreator: creator,
          tempCreatorUsedForUpdating: creator
        });
      })
      .catch(err => {
        console.log("Error fetching daily message");
      });
  };

  // <Link to={`/users/${creator.userhandle}`}>
  //   {creator.firstName}
  // </Link>
  render() {
    return (
      <div styleName="container">
        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="/images/avatar/large/rachel.png"
            />
            <Modal.Description>
              <Header>Pick an awesome profile pic</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <aside styleName="left-side-menu">
          <ol>
            <MapLinks
              render={item => (
                <Link to={`/user/${item.userHandle}`}>{item.firstName}</Link>
              )}
              items={this.state.creators}
            />
            <MapLinks
              render={item => <div>Hi there {item.firstName}</div>}
              items={this.state.creators}
            />
          </ol>
        </aside>
        <div styleName="right-main">
          <Spotlight
            originalSettingsForCreator={this.state.originalSettingsForCreator}
            tempCreatorUsedForUpdating={this.state.tempCreatorUsedForUpdating}
            updateCreator={this.updateCreator}
            submitCreatorUpdate={this.submitCreatorUpdate}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(AboutUsPage, css);
