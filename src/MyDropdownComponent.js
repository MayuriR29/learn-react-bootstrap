import React, { Component } from "react";
import { ButtonToolbar, MenuItem, SplitButton } from "react-bootstrap";
const BUTTONS = ["Default", "Primary", "Success", "Info", "Warning", "Danger"];

class MyDropdownComponent extends Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          {BUTTONS.map((title, i) => {
            return (
              <SplitButton
                bsStyle={title.toLowerCase()}
                title={title}
                key={i}
                id={`split-button-basic-${i}`}
              >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </SplitButton>
            );
          })}
        </ButtonToolbar>
      </div>
    );
  }
}

export default MyDropdownComponent;
