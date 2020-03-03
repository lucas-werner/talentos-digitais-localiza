import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as carAPI from '../services/carAPI';
import { Loading } from '../components';

class CarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: '',
      isShouldRedirect: false,
    };

    this.onChangeRedirect = this.onChangeRedirect.bind(this);
  }

  componentDidMount() {
    carAPI.getCar(this.props.match.params.id)
      .then((car) => this.setState({ car }));
  }

  onChangeRedirect() {
    const { id } = this.state.car;
    carAPI.deleteCar(id);
    this.setState({
      isShouldRedirect: true,
    });
  }

  render() {
    const { car, isShouldRedirect } = this.state;
    const {
      title, ranking, units, imagePath, price, specs, id
    } = car;

    if (isShouldRedirect) return <Redirect to="/" />;

    if (!car) return <Loading />;

    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img alt="Car Cover" src={`../${imagePath}`} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{`Ranking: ${ranking}`}</p>
              <p>{`Unidades vendidas: ${units}`}</p>
              <p>{`Preço: R$${price}`}</p>
              <p>Especificações técnicas: </p>
              <p>{specs}</p>
              <a href="https://seminovos.localiza.com/" target="_blank" rel="noopener noreferrer">Confira na Localiza!</a>
            </div>
            <div className="card-action">
              <Link to={`/cars/${id}/edit`}>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <button type="button" onClick={this.onChangeRedirect}>APAGAR</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CarDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }),
  }).isRequired,
};

export default CarDetails;
