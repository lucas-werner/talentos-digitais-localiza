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
BrowserRouter, ele é um componente que irá ser responsável por informar pra nossa aplicação que a partir de onde ele é chamado teremos um roteamento de componentes, por conta disso ele irá ficar em volta tanto do <App /> quanto do <Sobre />. Com isso o código do nosso ./src/index.js fica assim:
O Switch, é um componente que recebe vários componentes Route e dado o caminho que for passado na URL um deles é renderizado. Cada Route é uma rota do nosso sistema, e devemos passar pra ele qual vai ser o caminho da url por meio de um atributo path="" e dado esse path, um outro atributo com o nosso componente que foi importado chamado component={ComponenteDoPath}, deixando nossa estrutura com esse formato:
Vale ressaltar que o path="/" pode ser combinado com um atributo extra chamado exact para garantir que se a rota tiver somente "/" ele vai ser renderizado e evitar conflito com as outras rotas que possuam o valor passado no path.
Uma outra parada legal do path, é que se passarmos um Route com o path sendo um * após o último route (em nosso caso após o Route do sobre), podemos ter uma rota que representa a página 404 do nosso sistema.

### Manipulação de state e callbacks
```javascript 
class NewCar extends Component {
 
  handleSubmit(newCar) {
    carAPI.createCar(newCar);
    this.setState({ shouldRedirect: true });
  }

```
aisdjaisdjiasjd
```javascript
render() {
      return (
      <CarForm onSubmit={this.handleSubmit} car={{specs: {}}} />
    );
  }
```

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

### O que poderia ter sido feito e o que precisa ser melhorado

* Não há testes no projeto. Testar o comportamento da aplicação é essencial para manutenção e escalabilidade do produto. 
* O site não é responsivo. Atualmente, os clientes mobile representam quase 50% dos usuários.
* A manipulação do state é feita de forma bastante complexa - há ferramentas melhores para resolver esse problema, como Redux e React Hooks. 
* O código está muito verboso e repetitivo em diversas partes. Poderia ter sido melhor componentizado.
