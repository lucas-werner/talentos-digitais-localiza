import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira a marca e o modelo do carro (Ex. GM Corsa)"
            id="movie_title"
            type="text"
            className="validate"
            value={title}
            onChange={(event) => this.updateMovie('title', event.target.value)}
          />
          <label className="active" htmlFor="movie_title">Marca e modelo</label>
        </div>
      </div>
    );
  }

  renderRankingInput() {
    const { ranking } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o posicionamento no ranking dos mais vendidos."
            id="movie_title"
            type="text"
            className="validate"
            value={ranking}
            onChange={(event) => this.updateMovie('title', event.target.value)}
          />
          <label className="active" htmlFor="movie_title">Ranking</label>
        </div>
      </div>
    );
  }


  renderUnitsInput() {
    const { units } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o número de unidades vendidas em 2019"
            id="movie_subtitle"
            type="text"
            className="validate"
            value={units}
            onChange={(event) => this.updateMovie('subtitle', event.target.value)}
          />
          <label className="active" htmlFor="movie_subtitle">Unidades Vendidas</label>
        </div>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            className="validate"
            value={imagePath}
            onChange={(event) => this.updateMovie('imagePath', event.target.value)}
          />
          <label className="active" htmlFor="movie_image">Imagem</label>
        </div>
      </div>
    );
  }

  renderSpecsInput() {
    const { specs } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="movie_storyline"
            className="materialize-textarea"
            value={specs}
            onChange={(event) => this.updateMovie('storyline', event.target.value)}
          />
          <label className="active" htmlFor="movie_storyline">Especificações técnicas</label>
        </div>
      </div>
    );
  }

  renderPriceInput() {
    const { price } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o valor de mercado"
            id="movie_subtitle"
            type="text"
            className="validate"
            value={price}
            onChange={(event) => this.updateMovie('subtitle', event.target.value)}
          />
          <label className="active" htmlFor="movie_subtitle">Preço</label>
        </div>
      </div>
    );
  }



  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            className="form-control"
            step={0.1}
            min={0}
            max={5}
            value={rating}
            onChange={(event) => this.updateMovie('rating', event.target.value)}
          />
          <label className="active" htmlFor="movie_rating">Avaliação</label>
        </div>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="row">
        <button
          className="btn waves-effect waves-light"
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="movie-form">
        <div className="row">
          <form className="col s12">
            {this.renderTitleInput()}
            {this.renderUnitsInput()}
            {this.renderRankingInput()}
            {this.renderImagePathInput()}
            {this.renderPriceInput()}
            {this.renderSpecsInput()}            
            {this.renderSubmitButton()}
          </form>
        </div>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
