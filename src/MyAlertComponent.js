import React, { Component } from "react";
import { Alert } from 'react-bootstrap';
class MyAlertComponent extends Component {
  render() {
    return (
      <div>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not
          looking too good.
        </Alert>
      </div>
    );
  }
}

export default MyAlertComponent;
