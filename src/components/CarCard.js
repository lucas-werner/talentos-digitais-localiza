import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CarCard extends React.Component {
  render() {
    const { car } = this.props;
    const {
      title, ranking, units, price, imagePath, id,
    } = car;
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card car-card">
            <div className="card-image">
              <img alt="Car Cover" className="car-card-image" src={imagePath} />
              <span className="ranking">{ranking}</span>
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>Unidades vendidas: {units}</p>
              <p>Seminovo na localiza: R${price}</p>
            </div>
            <div className="card-action">
              <Link to={`/cars/${id}`}>VER DETALHES</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CarCard.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default CarCard;
