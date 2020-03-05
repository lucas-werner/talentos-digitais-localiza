import React from 'react';
import PropTypes from 'prop-types';

class CarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.car};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {    
    const { onSubmit } = this.props;
    const noBlank = Object.values(this.state).some(e => e === undefined || e === '')
    if (noBlank === true) {
      alert('Você deve preencher todos os campos')
    } else {
      onSubmit(this.state);
    }
  }

  updateCar(field, newValue) {
    this.setState({ [field]: newValue });
  }

  updateSpecs(field, newValue) {
    this.setState({ specs: { [field]: newValue } });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira a marca e o modelo do carro (Ex. GM Corsa)"
            id="car_title"
            type="text"
            className="validate"
            value={title}
            onChange={(event) => this.updateCar('title', event.target.value)}
          />
          <label className="active" htmlFor="car_title">Marca e modelo</label>
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
            id="car_title"
            type="text"
            className="validate"
            value={ranking}
            onChange={(event) => this.updateCar('ranking', event.target.value)}
          />
          <label className="active" htmlFor="car_title">Ranking</label>
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
            id="car_subtitle"
            type="text"
            className="validate"
            value={units}
            onChange={(event) => this.updateCar('units', event.target.value)}
          />
          <label className="active" htmlFor="car_subtitle">Unidades Vendidas</label>
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
            id="car_image"
            type="text"
            className="validate"
            value={imagePath}
            onChange={(event) => this.updateCar('imagePath', event.target.value)}
          />
          <label className="active" htmlFor="car_image">Imagem</label>
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
            id="car_subtitle"
            type="text"
            className="validate"
            value={price}
            onChange={(event) => this.updateCar('price', event.target.value)}
          />
          <label className="active" htmlFor="car_subtitle">Preço</label>
        </div>
      </div>
    );
  }

  renderModelInput() {
    const { model } = this.state.specs
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o modelo específico"
            id="car_model"
            type="text"
            className="validate"
            value={model}
            onChange={(event) => this.updateSpecs('model', event.target.value)}
          />
          <label className="active" htmlFor="car_model">Modelo de série</label>
        </div>
      </div>
    );
  }

  renderMotorInput() {
    const { motor } = this.state.specs
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira a motorização do veículo (Ex. 1.6)"
            id="car_motor"
            type="text"
            className="validate"
            value={motor}
            onChange={(event) => this.updateSpecs('motor', event.target.value)}
          />
          <label className="active" htmlFor="car_motor">Motorização</label>
        </div>
      </div>
    );
  }

  renderPowerInput() {
    const { power } = this.state.specs
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira a potência do veículo (Ex. 82cv)"
            id="car_power"
            type="text"
            className="validate"
            value={power}
            onChange={(event) => this.updateSpecs('power', event.target.value)}
          />
          <label className="active" htmlFor="car_power">Potência</label>
        </div>
      </div>
    );
  }

  renderCityFuelInput() {
    const { cityFuel } = this.state.specs
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o consumo médio de combustível na cidade (Ex. 11,2 km/l)"
            id="car_fuel"
            type="text"
            className="validate"
            value={cityFuel}
            onChange={(event) => this.updateSpecs('cityFuel', event.target.value)}
          />
          <label className="active" htmlFor="car_motor">Consumo médio</label>
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
          SALVAR
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="car-form">
        <div className="row">
          <form className="col s12">
            {this.renderTitleInput()}
            {this.renderUnitsInput()}
            {this.renderRankingInput()}
            {this.renderImagePathInput()}
            {this.renderPriceInput()}
            <h4>Especificações técnicas</h4>
            {this.renderModelInput()}
            {this.renderMotorInput()}
            {this.renderPowerInput()}
            {this.renderCityFuelInput()}
            {this.renderSubmitButton()}
          </form>
        </div>
      </div>
    );
  }
}

CarForm.propTypes = {
  car: PropTypes.shape({
    rating: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CarForm;
