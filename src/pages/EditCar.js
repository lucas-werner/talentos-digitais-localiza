import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { CarForm, Loading } from '../components';
import * as carAPI from '../services/carAPI';

class EditCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: '',
      car: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    carAPI.getCar(this.props.match.params.id)
      .then((car) => this.setState({
        status: '',
        shouldRedirect: '',
        car,
      }));
  }

  componentDidUpdate() {
    return (
      <Redirect to="/" />
    );
  }

  handleSubmit(updatedCar) {
    carAPI.updateCar(updatedCar);
    this.setState({ status: '', shouldRedirect: true, car: updatedCar });
  }

  render() {
    const { status, shouldRedirect, car } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      return (
        <Loading />
      );
    }

    return (
      <CarForm car={car} onSubmit={this.handleSubmit} />
    );
  }
}

EditCar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }),
  }).isRequired,
};

export default EditCar;
