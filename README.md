# Boas vindas, Localiza!

![alt text](http://localiza.grupociadetalentos.com.br/img/banner-texto.png)

Este é repositório do projeto para o programa de talentos digitais da localiza. O projeto é relativamente simples: é uma página que exibe cards de carros e suas respectivas propriedades. O interessante dele é que possível criar, editar e remover os cards (CRUD), tudo isso, graças a manipulação do `state` dos `components` criados. 

Além disso, pela barra de pesquisa é possível pesquisar qualquer outro modelo de automóvel. Isso é feito por meio da API disponibilizada pelo Mercado Livre. Infelizmente, a `thumbnail` que é retornada vem numa qualidade bastante reduzida, o que prejudica o site esteticamente. No entanto, o interessante é realmente a utilização da API.

Diante das minhas evidentes limitações técnicas, fiz esse projeto com muito carinho, e acredito que consegui explorar bem o conteúdo que aprendi até agora. Vamos agora a uma breve explicação.

Link para page => https://lucas-werner.github.io/talentos-digitais-localiza

### Tecnologias utilizadas no projeto

* ES6
* Reactjs
* React Router
* API endpoint

### React Router

```javascript
function App() {
  return (
    <main>
      <HashRouter basename='/talentos-digitais-localiza/'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={QueryDetails} />
          <Route exact path="/cars/new" component={NewCar} />
          <Route exact path="/cars/:id/edit" component={EditCar} />
          <Route exact path="/cars/:id" component={CarDetails} />         
          <Route path='*' component={NotFound} />
        </Switch>
      </HashRouter>
    </main>
  );
}
```
O `Router` é o componente responsável por informar para a aplicação que a partir de onde ele é chamado teremos um roteamento de componentes, por conta disso ele envolve todos componentes da aplicação. 

O `Switch`, é um componente que recebe vários componentes Router e dado o caminho que for passado na URL um deles é renderizado. Cada `Route` é uma rota do nosso sistema, e devemos passar para ele qual vai ser o caminho da url por meio de um atributo `path=""` e dado esse path, um outro atributo com o nosso componente que foi importado chamado component={ComponenteDoPath}.

Vale ressaltar que o path="/" pode ser combinado com um atributo extra chamado exact para garantir que se a rota tiver somente "/" ele vai ser renderizado e evitar conflito com as outras rotas que possuam o valor passado no path.

Além disso, se passarmos um `Route` com o path sendo um * após o último `route`, podemos ter uma rota que representa a página 404 do nosso sistema, no caso, o componente importado `{NotFound}`.

### Manipulação de state e callbacks

Esse foi o maior desafio do projeto, pois ainda desconhecia o Redux, biblioteca que cria um estado geral para o componente, facilitando o tratamento do fluxo de dados.

```javascript 
class NewCar extends Component {
 
  handleSubmit(newCar) {
    carAPI.createCar(newCar);
    this.setState({ shouldRedirect: true });
  }

```

A função `handleSubmit` é a que de fato vai gerenciar o estado, no caso, do componente `New Car`.

```javascript
render() {
      return (
      <CarForm onSubmit={this.handleSubmit} car={{specs: {}}} />
    );
  }
```
A seguir, ela é passada como callback para o componente `Car Form`, por meio da `props` chamada `onSubmit`. 
*ATENÇÃO.* 

```javascript
  handleSubmit() {    
    const { onSubmit } = this.props;
    const noBlank = Object.values(this.state).some(e => e === undefined || e === '')
    if (noBlank === true) {
      alert('Você deve preencher todos os campos')
    } else {
      onSubmit(this.state);
    }
  }
```

```javascript
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
```

### API do Mercado Livre

```javascript
export async function getQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
```

ES8 async await

### O que poderia ter sido feito e o que precisa ser melhorado

* Não há testes no projeto. Testar o comportamento da aplicação é essencial para manutenção e escalabilidade do produto. Isso poderia ser feito pelo uso da RTL, bilbioteca de testes própria do React.
* O site não é responsivo. Atualmente, os clientes mobile representam quase 50% dos usuários. Por do @mediaquery do CSS, isso poderia ser resolvido.
* A manipulação do state é feita de forma bastante complexa - há ferramentas melhores para resolver esse problema, como Redux e React Hooks. 
* O código está muito verboso e repetitivo em diversas partes. Necessita refatoração e poderia ter sido melhor componentizado.
