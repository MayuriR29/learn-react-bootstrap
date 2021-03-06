import React from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock} from "react-bootstrap"
class MyFormComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    //   this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange=(event)=> {
      this.setState({ value: event.target.value });
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
      );
    }
  }
  export default MyFormComponent