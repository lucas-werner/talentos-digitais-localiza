import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../components/CarCard';
import * as carAPI from '../services/carAPI';
import { Loading } from '../components';

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: '' };
  }

  componentDidMount() {
    carAPI.getCars()
      .then((cars) => this.setState(
        { cars },
      ));
  }

  render() {
    const { cars } = this.state;
    if (!cars) return <Loading />;
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
        <h1 className="title">Carros mais vendidos de 2019</h1>
          <span>Faltou algum modelo? </span><Link to="/cars/new" className="card-action">Adicione aqui.</Link>   
        </div>
        <div className="car-list">
          {cars.map((car) => <CarCard key={car.title} car={car} />)}
        </div>

      </div>


    );
  }
}

export default CarList;
