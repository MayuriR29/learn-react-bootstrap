import React, { Component } from 'react';
import './App.css';
import MyFormComponent from "./MyFormComponent"
import MyAlertComponent from "./MyAlertComponent"
import AlertDismissable from "./MyAlertDismissable"
import MyComponentBreadCrumb from "./MyComponentBreadCrumb"
import MyDropdownComponent from "./MyDropdownComponent"
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyFormComponent />
        <MyAlertComponent />
        <AlertDismissable />
        <MyComponentBreadCrumb /> 
        <MyDropdownComponent />
      </div>
    );
  }
}

export default App;
