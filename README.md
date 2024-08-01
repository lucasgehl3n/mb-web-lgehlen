# Projeto de uma página simples em Vue3 + Vite

Olá! Obrigado por chegar até aqui. Este projeto tem o objetivo de ser uma simples página de aplicação simples que cumpre os requisitos pré-definidos [no repositório Desafio MB Web](https://github.com/mercadobitcoin/desafio-mb-web)


## Stack utilizada

O repositório é dividido em duas partes: frontend e backend. 

No front-end, utilizei Vue3 em conjunto com o Vite, partindo inicialmente do template fornecido na própria documentação do Vite para utilização conjunta. Também utilizei SASS para melhorar a legibilidade e otimizar o CSS da aplicação. 

A ideia é que o front seja o mais limpo possível, mostrando a minha forma de organizar uma aplicação por conta sem a utilização de uma grande gama de bibliotecas. Por isso, realizei até a criação das máscaras de campos de forma manual, como diretivas javascript. 

Quanto ao back-end, trata-se de um endpoint simples que utiliza Express para receber as requisições. Utilizei uma arquitetura que é uma adaptação simplificada de um "Clean Architecture". Assim, organizei o back-end em controllers, middlewares, validators e routes. A única biblioteca de validação utilizada foi para validação de CNPJ/CPF, [disponível aqui](https://www.npmjs.com/package/cpf-cnpj-validator). 

No mais, o back-end também utiliza o [Helmet](https://www.npmjs.com/package/helmet), uma biblioteca que aplica por default diversas políticas de segurança em requisições HTTP que são mediadas pelo Express.


## Instalação
A instalação está dividida em duas etapas:

### **Back-end**

**A partir da raíz, navegue para a pasta `backend`**:

```bash
   cd backend
```

**Instale as dependências**
```bash
   npm i
```

**Rodar a aplicação**
```bash
   npm run start
```

Ela estará disponível na porta 3000 (certifique-se de que esteja livre).


### **Front-end**

**A partir da raíz, navegue para a pasta `frontend`**:

```bash
   cd frontend
```

**Instale as dependências**
```bash
   npm i
```

**Rodar a aplicação**
```bash
   npm run build-watch
```

## **Como acessar**
Com a aplicação rodando (front-end e back-end), acesse http://localhost:3000/registration no navegador de sua preferência. 

## Possíveis upgrades
Como consegui trabalhar no projeto por apenas três dias, gostaria de deixar algumas ideias de melhorias considerando as funcionalides já existentes:

- Abordagem de internacionalização
    - A abordagem de internacionalização seria interessante para manter os textos da aplicação concentrados em um local de fácil manutenção. Isso evita duplicações e facilita casos em que a aplicação precisa ter mais de um único idioma. No caso do Vue, poderíamos utilizar o vue-i18n.

- Testes unitários e de mutação
    - Os testes unitários garantem que quaisquer mudanças aplicadas no código sejam validadas antes de um futuro commit, garantindo a integridade e qualidade do código a longo prazo, além de facilitar o entendimento de funcionalidades. Os testes de mutação, por sua vez, garantem que os testes unitários estejam cobrindo 100% do código escrito. Algumas tecnologias sugerias para isso seriam o Vitest, o Jest, além do Stryker para mutações. 

- Outros steps de testes
    - Em um cenário hipotético onde a aplicação se torne mais robusta, seria interessante a utilização do Cypress para testes E2E e de componentes, que possuem a finalidade de validar fluxos inteiros de CI/CD através de automações.



## Agradecimentos

Se você leu até aqui, quero agradecê-lo pelo tempo disponibilizado. Todo feedback é bem vindo! Conheça mais sobre mim [clicando aqui](https://gehlen.tech/).

