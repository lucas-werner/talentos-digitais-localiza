import React, { Component } from 'react';
import Rating from 'react-rating';
import grayStar from '../images/gray_star.png';
import yellowStar from '../images/yellow_star.png';
import './customerRating.css';

class CustomerRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 1,
      name: '',
      email: '',
      comment: '',
      status: false,
    };

    this.addEmail = this.addEmail.bind(this);
    this.addComment = this.addComment.bind(this);
    this.saveRating = this.saveRating.bind(this);
    this.changeRate = this.changeRate.bind(this);
    this.renderRatings = this.renderRatings.bind(this);
  }

  componentDidMount() {
    this.renderRatings();
  }

  addEmail(event) {
    const email = event.target;
    this.setState({ email: email.value });
  }

  addName(event) {
    const name = event.target;
    this.setState({ name: name.value });
  }

  addComment(event) {
    const comment = event.target;
    this.setState({ comment: comment.value });
  }

  changeRate(rate) {
    this.setState({ rating: rate });
  }

  saveRating() {
    const { name, email } = this.state;
    if (email === '' || name === '') return alert('Nome e email obrigatórios');
    if (!localStorage.comments) {
      localStorage.setItem('comments', JSON.stringify([this.state]));
      this.setState({ status: true });
      return this.renderRatings();
    }
    const comments = JSON.parse(localStorage.getItem('comments'));
    localStorage.setItem('comments', JSON.stringify([...comments, this.state]));
    this.setState({ status: true });
    return this.renderRatings();
  }

  renderRatings() {
    const comments = JSON.parse(localStorage.getItem('comments'));
    if (!localStorage.comments) return false;
    return (
      <div>
        <hr></hr>
        <h5>Avaliações: </h5>
        {comments.map((comment) => (
          <div className="single-comment">
            <div>
              <Rating
                readonly
                initialRating={comment.rating}
                emptySymbol={<img src={grayStar} className="icon rating_star" alt="gray star" />}
                fullSymbol={<img src={yellowStar} className="icon rating_star" alt="yellow star" />}
              />
            </div>
            <div>
              Usuário: {comment.name}
            </div>
            <div>
              Email: {comment.email}
            </div>
            <div>
              Comentário: {comment.comment}
            </div>
          </div>
        ))
        }
      </div>
    );
  }

  render() {
    const { rating } = this.state;
    return (
      <section className="card rating-form">
        <div className="card-title"><h3>Avalie o veículo</h3></div>
        <form>
          <div>
            <label htmlFor="name">
              <input id="name" type="text" placeholder="Insira seu nome" onChange={(e) => this.addName(e)} />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <input id="email" type="email" placeholder="Insira seu email" onChange={this.addEmail} />
            </label>
          </div>



          <div className="rating_stars">
            <Rating
              initialRating={rating}
              onChange={(rate) => this.changeRate(rate)}
              emptySymbol={<img src={grayStar} className="icon rating_star" alt="gray star" />}
              fullSymbol={<img src={yellowStar} className="icon rating_star" alt="yellow star" />}
            />
          </div>
          <br></br>
          <div>
            <textarea onChange={this.addComment} />
          </div>         
          <div>
            <button type="button" onClick={this.saveRating}>Avaliar</button>
          </div>
        </form>
        <section>{this.renderRatings()}</section>
      </section>
    );
  }
}

export default CustomerRating;
