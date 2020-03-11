# Boas vindas, Localiza!

![alt text](https://lh4.googleusercontent.com/FcWpZBP1DQhQV7HCuLImNyUteuMMa8WFLOvUe1pwf4HPe3M5ntzetaP4ihsSq-bsl2XQGx6f2gtXpjDFgiwv-3-MRGLNEShGEI_3ALh9jee_kSoZp_zBZNjW-T5OngJsccoBT8HD)

***

## TALENTOS DIGITAIS LOCALIZA

Este é repositório do projeto para o programa de talentos digitais da localiza. O projeto é relativamente simples: é uma página que exibe cards de carros e suas respectivas propriedades. O interessante dele é que possível criar, editar e remover os cards (CRUD), tudo isso, graças a manipulação do `state` dos `components` criados. 

Além disso, pela barra de pesquisa é possível pesquisar qualquer outro modelo de automóvel. Isso é feito por meio da API disponibilizada pelo Mercado Livre. Infelizmente, a `thumbnail` que é retornada vem numa qualidade bastante reduzida, o que prejudica o site esteticamente. No entanto, o interessante é realmente a utilização da API.

Diante das minhas evidentes limitações técnicas, fiz esse projeto com muito carinho, e acredito que consegui explorar bem o conteúdo que aprendi até agora. Vamos agora a uma breve explicação.

***
Link para page => https://lucas-werner.github.io/talentos-digitais-localiza

### Tecnologias utilizadas no projeto

* React Router
* API endpoint
* ES6 e ESNext

### 1. React Router

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

### 2. Manipulação de state e callbacks

Esse foi o maior desafio do projeto, pois ainda desconhecia o Redux, biblioteca que cria um estado geral para o componente, facilitando o tratamento do fluxo de dados.

Vamos lá!!

A função `handleSubmit(newCar)` é a que de fato vai gerenciar o estado, no caso, do componente `New Car`. No entanto, como veremos, ela percorrerá um caminho até voltar com informação necessária para atualizar o state.

```javascript 
class NewCar extends Component {
 
  handleSubmit(newCar) {
    carAPI.createCar(newCar);
    this.setState({ shouldRedirect: true });
  }

```
A seguir, ela é passada como callback para o componente `Car Form`, por meio da `props` chamada `onSubmit`. 

**ATENÇÃO!** 

Nesse caso, `onSubmit` é apenas um parâmetro que é passado adiante, e não um elemento da tag `button`. Para ilustrar, `onClick` poderia simplesmente chamar `batatinha={this.handleSubmit}` que ainda assim daria certo (desde que mude a chamada no componente filho).

Outro ponto fundamental é a compreensão do `this`. Repare que a função `handleSubmit` é passada com `.this`, que em tradução livre significa "isto/isso". Ele é fundamental pois refere-se à classe a qual a função pertence. Ou seja, o `this.state` não será do componente filho, isto é, o componente `CarForm`, mas sim do próprio `NewMovie`.

```javascript
render() {
      return (
      <CarForm onSubmit={this.handleSubmit} car={{specs: {}}} />
    );
  }
```

A função `handleSubmit()`, por sua vez, pertence ao componente filho `CarForm`. Ela é chamada assim que se clica no botão SALVAR.
Note que o `onClick` nesse caso pertence à tag `button`, ou seja, não é passado como `props`. Nesse caso, ele necessariamente precisa ser chamado de `onClick`, que é uma palavra reservada da linguagem HTML.


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

Por fim, aquela função lá de cima, `handleSubmit(newCar)`, finalmente é chamada ao final da função `handleSubmit()`. Repare que em `const { onSubmit } = this.props`, o `onSubmit`, que foi recebido como `props` do componente `NewCar`, nada mais é do que a função `handleSubmit(newCar)` do componente pai. 

Mas por que passar essa função dentro da outra? Isso é necessário (antes do Redux), porque o componente `NewCar` sozinho não  capaz de obter essa informação dentro do próprio `state`. Ele teve que ir buscar lá no componente filho a informação necessária, no caso, o `this.state`.

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

O `this.state` nada mais é do as informações do carro a ser adicionado, que foram recolhidas no formulário do componente `NewCar`.

`else {
      onSubmit(this.state);
    }`

 
Ao fim da maratona, depois de obter a bendita informação, a função `handleSubmit(newCar)` finalmente chama a função `createCar()`, que cria um novo carro na base de dados usando como parâmetro a informação obtida.

```javascript 
class NewCar extends Component {
 
  handleSubmit(newCar) {
    carAPI.createCar(newCar);
    this.setState({ shouldRedirect: true });
  }

```


### 3. ES8 e API do Mercado Livre

```javascript
export async function getQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
```
Para fazer essa requisão a API, foi utlizada a syntax `async await`, que foi uma excelente inovação trazida pela oitava versão do ECMA (javascript). Ela substitui o `.then()`, deixando o código muito menos verboso.

### O que poderia ter sido feito e o que precisa ser melhorado

* Não há testes no projeto. Testar o comportamento da aplicação é essencial para manutenção e escalabilidade do produto. Isso poderia ser feito pelo uso da RTL, bilbioteca de testes própria do React.
* O site não é responsivo. Atualmente, os clientes mobile representam quase 50% dos usuários. Por do @mediaquery do CSS, isso poderia ser resolvido.
* A manipulação do state é feita de forma bastante complexa - há ferramentas melhores para resolver esse problema, como Redux e React Hooks. 
* O código está muito verboso e repetitivo em diversas partes. Necessita refatoração e poderia ter sido melhor componentizado.
