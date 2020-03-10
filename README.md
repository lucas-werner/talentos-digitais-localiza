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

### Maior desafio do projeto: manipulação de state e callbacks

### O que poderia ter sido feito e o que precisa ser melhorado

* Não há testes no projeto. Testar o comportamento da aplicação é essencial para manutenção e escalabilidade do produto. 
* O site não é responsivo. Atualmente, os clientes mobile representam quase 50% dos usuários.
* A manipulação do state é feita de forma bastante complexa - há ferramentas melhores para resolver esse problema, como Redux e React Hooks. 
* O código está muito verboso e repetitivo em diversas partes. Poderia ter sido melhor componentizado.
