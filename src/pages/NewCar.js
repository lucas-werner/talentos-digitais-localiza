import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CarForm from '../components/CarForm';
import * as carAPI from '../services/carAPI';

class NewCar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { shouldRedirect: false };
  }

  handleSubmit(newCar) {
    carAPI.createCar(newCar);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <CarForm onSubmit={this.handleSubmit} />
    );
  }
}
export default NewCar;
