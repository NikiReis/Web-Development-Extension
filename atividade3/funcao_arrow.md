# Função Arrow:
  A função de seta, também conhecida como função flecha ou função arrow em inglês, é uma característica 
  introduzida no JavaScript pela especificação ECMAScript 6 (ES6). Ela oferece uma sintaxe mais concisa
  e uma maneira mais simples de escrever funções anônimas. A principal diferença entre as 
  funções tradicionais e as funções arrow é a maneira como o escopo do this é tratado.

## Principais características das funções arrow:

  - Sintaxe Concisa: A sintaxe das funções arrow é mais curta e direta, economizando a necessidade de escrever
    a palavra-chave function e as chaves {} em certos casos.

  - Escopo do this: Ao contrário das funções tradicionais, as funções arrow não possuem seu próprio valor this. 
    Em vez disso, elas herdam o valor this do escopo externo onde foram criadas. Isso é especialmente 
    útil em contextos como callbacks e manipulação de eventos, onde o valor do this costuma ser problemático.

## Exemplo de sintaxe:

    javascript
    
    // Função tradicional
    function soma(a, b) {
      return a + b;
    }
    
    // Função arrow equivalente
    const somaArrow = (a, b) => a + b;
