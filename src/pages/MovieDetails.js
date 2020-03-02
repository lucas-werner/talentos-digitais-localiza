import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      isShouldRedirect: false,
    };

    this.onChangeRedirect = this.onChangeRedirect.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie }));
  }

  onChangeRedirect() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id);
    this.setState({
      isShouldRedirect: true,
    });
  }

  render() {
    const { movie, isShouldRedirect } = this.state;
    const {
      title, ranking, units, imagePath, price, specs, id
    } = movie;

    if (isShouldRedirect) return <Redirect to="/" />;

    if (!movie) return <Loading />;

    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img alt="Movie Cover" src={`../${imagePath}`} />
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
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <button type="button" onClick={this.onChangeRedirect}>APAGAR</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }),
  }).isRequired,
};

export default MovieDetails;
