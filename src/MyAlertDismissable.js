import React from 'react';
import { Alert,Button } from 'react-bootstrap';
class AlertDismissable extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleDismiss = this.handleDismiss.bind(this);
      this.handleShow = this.handleShow.bind(this);
  
      this.state = {
        show: true
      };
    }
  
    handleDismiss() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      if (this.state.show) {
        return (
          <Alert bsStyle="success" onDismiss={this.handleDismiss}>
            <h4>Oh snap! You got an error!</h4>
            <p>
              Some text in p tag.
            </p>
            <p>
              <Button bsStyle="success">Take this action</Button>
              <span> or </span>
              <Button onClick={this.handleDismiss}>Hide Alert</Button>
            </p>
          </Alert>
        );
      }
  
      return <Button onClick={this.handleShow}>Show Alert</Button>;
    }
  }
  export default AlertDismissable