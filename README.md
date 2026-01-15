## AI-Driven Software Engineering ## 

## Descrição do Projeto

Este projeto foi desenvolvido como parte da atividade prática da disciplina de Engenharia de Software Orientada por IA. O objetivo é demonstrar a aplicação de Inteligência Artificial no processo de desenvolvimento de software, utilizando boas práticas como testes automatizados, versionamento de código e integração com ferramentas modernas.

## Problema Proposto

Criar uma função em JavaScript responsável por calcular o valor total de um pedido, aplicando automaticamente 10% de desconto quando o valor ultrapassar R$ 100,00.
Além disso, o projeto deveria conter testes automatizados para validar diferentes cenários e garantir a qualidade da solução.

# Solução Implementada

Foi criada a função calculateOrderTotal, localizada no arquivo:

src/orderService.js

## Funcionalidades da função:

- Recebe o valor do pedido como parâmetro
- Valida se o valor informado é um número válido
- Aplica 10% de desconto quando o valor é superior a R$ 100,00
- Retorna o valor final do pedido
- Lança erro em casos de valores inválidos

# Testes Automatizados

Os testes automatizados foram desenvolvidos utilizando o Jest, garantindo a confiabilidade da função.

Arquivo de testes:

tests/orderService.test.js 

## Os testes cobrem:

- Valores sem desconto (≤ R$ 100)
- Valores com desconto (> R$ 100)
- Valores decimais
- Tratamento de erros (valores inválidos)

Todos os testes foram executados com sucesso, garantindo que a função funciona corretamente em todos os cenários propostos.

## Uso de Inteligência Artificial no Desenvolvimento

A Inteligência Artificial foi utilizada de forma estratégica ao longo de todo o processo de desenvolvimento deste projeto, atuando como uma ferramenta de apoio à Engenharia de Software.

Durante a fase inicial, a IA auxiliou na compreensão detalhada do problema proposto, permitindo a correta interpretação dos requisitos funcionais, especialmente no que se refere à regra de negócio relacionada à aplicação automática de desconto.

Na etapa de implementação, ferramentas baseadas em IA, como o ChatGPT e o GitHub Copilot, foram utilizadas para:

- Apoiar a estruturação lógica da função desenvolvida
- Sugerir boas práticas de programação em JavaScript
- Auxiliar na escrita de código limpo, legível e bem documentado
- Contribuir para a criação de testes automatizados mais completos

É importante destacar que a IA não substituiu o desenvolvedor, mas atuou como um instrumento de suporte, aumentando a produtividade, reduzindo erros e promovendo maior qualidade no código final. Todas as decisões de implementação foram compreendidas e validadas pelo desenvolvedor, garantindo domínio total sobre a solução apresentada.

## Como Executar o Projeto

Pré-requisitos:

Node.js instalado

Passos para execução:

npm install
npm test

Os testes serão executados automaticamente e o resultado será exibido no terminal.

## Conclusão

O desenvolvimento deste projeto possibilitou a aplicação prática dos conceitos abordados na disciplina de Engenharia de Software Orientada por Inteligência Artificial, permitindo a integração entre teoria e prática de forma clara e objetiva.
A implementação da função de cálculo de pedidos, aliada à criação de testes automatizados, evidenciou a importância da validação de regras de negócio e da garantia de qualidade do software. O uso de testes contribuiu para a confiabilidade da solução, assegurando que diferentes cenários fossem corretamente tratados.
A utilização de ferramentas de Inteligência Artificial ao longo do desenvolvimento mostrou-se um recurso relevante para apoiar o processo de construção do software, auxiliando na organização do raciocínio lógico, na adoção de boas práticas e na melhoria da produtividade. Ressalta-se que a IA foi empregada como suporte ao desenvolvedor, sem substituir a análise crítica e o entendimento humano das decisões tomadas.
Dessa forma, o projeto reforça a relevância da IA como aliada no desenvolvimento de software moderno, desde que utilizada de maneira consciente e responsável, contribuindo para soluções mais eficientes, bem estruturadas e alinhadas às necessidades do negócio.


