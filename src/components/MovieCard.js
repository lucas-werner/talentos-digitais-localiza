import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title, ranking, units, price, imagePath, id,
    } = movie;
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card movie-card">
            <div className="card-image">
              <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
              <span className="ranking">{ranking}</span>
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>Unidades vendidas: {units}</p>
              <p>Seminovo na localiza: R${price}</p>
            </div>
            <div className="card-action">
              <Link to={`/movies/${id}`}>VER DETALHES</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
