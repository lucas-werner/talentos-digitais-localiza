import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: '',
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({
        status: '',
        shouldRedirect: '',
        movie,
      }));
  }

  componentDidUpdate() {
    return (
      <Redirect to="/" />
    );
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ status: '', shouldRedirect: true, movie: updatedMovie });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
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
      <MovieForm movie={movie} onSubmit={this.handleSubmit} />
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }),
  }).isRequired,
};

export default EditMovie;
