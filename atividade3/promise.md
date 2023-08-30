# Promises:
Promises são um conceito fundamental em programação assíncrona no JavaScript.
Elas foram introduzidas para lidar de forma mais eficiente e legível com operações assíncronas, 
como requisições de rede, leitura/escrita de arquivos e outras tarefas que não são imediatamente concluídas.

#### Principais pontos sobre Promises:

    Representação de Valor Futuro: Uma Promise representa um valor que pode estar disponível agora, no futuro ou nunca.
    Ela encapsula o resultado eventual ou o fracasso de uma operação assíncrona.

  ## Estados: Uma Promise pode estar em três estados:
  - **Pendente (pending)**: O estado inicial, quando a Promise está aguardando a conclusão da operação assíncrona.
  - **Realizada (fulfilled)**: A operação assíncrona foi concluída com sucesso, e a Promise possui um valor resultante.
  - **Rejeitada (rejected)**: A operação assíncrona falhou, e a Promise possui um motivo de rejeição.

  ## Métodos:
  - **.then()**: Usado para lidar com o caso de sucesso da Promise, ou seja, quando ela é realizada.
  - **.catch()**: Usado para lidar com o caso de falha da Promise, ou seja, quando ela é rejeitada.
  - **.finally()**: Permite executar código após a Promise ser realizada ou rejeitada, independentemente do resultado.

## Exemplo de uso de Promise:

    javascript
    
    const minhaPromise = new Promise((resolve, reject) => {
      // Simulando uma operação assíncrona
      setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
          resolve("Operação concluída com sucesso!");
        } else {
          reject("A operação falhou.");
        }
      }, 1000);
    });

    minhaPromise
      .then(resultado => console.log(resultado))
      .catch(erro => console.error(erro));

#### Em resumo, funções arrow fornecem uma sintaxe mais enxuta e gerenciam o escopo do this, enquanto Promises simplificam a manipulação de operações assíncronas, permitindo um código mais limpo e organizado.
