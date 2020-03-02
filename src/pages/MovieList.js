import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: '' };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState(
        { movies },
      ));
  }

  render() {
    const { movies } = this.state;
    if (!movies) return <Loading />;
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/movies/new" className="card-action">ADICIONAR CARTÃO</Link>
        </div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>

      </div>


    );
  }
}

export default MovieList;
