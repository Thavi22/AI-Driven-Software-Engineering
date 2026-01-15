# AI-Driven Software Engineering

## Prototipação de um Fluxo de Desenvolvimento Assistido por IA

# Contexto do Desafio (Análise do Problema)

No cenário atual de desenvolvimento de software, equipes de engenharia frequentemente enfrentam um dilema entre velocidade de entrega e qualidade do código. A pressão por prazos curtos muitas vezes resulta em código pouco testado, aumento de bugs em produção e retrabalho constante, impactando diretamente a produtividade da equipe e a confiabilidade das entregas.
Neste contexto, considera-se uma empresa fictícia de tecnologia que desenvolve sistemas internos para gestão de pedidos. A equipe enfrenta dificuldades para manter um fluxo de desenvolvimento ágil sem comprometer a qualidade, especialmente no que se refere à criação de regras de negócio e à validação por meio de testes automatizados.

# Objetivo do Projeto

O objetivo deste projeto é demonstrar, por meio de um protótipo funcional, como o uso combinado de Inteligência Artificial e automação de processos pode ajudar a resolver o dilema entre velocidade e qualidade no desenvolvimento de software.

Para isso, o projeto propõe:

- Utilizar o GitHub Copilot como ferramenta de apoio à geração de código e testes.
- Implementar testes automatizados para garantir a qualidade da lógica de negócio.
- Configurar um pipeline de Integração Contínua (CI) com GitHub Actions, assegurando que os testes sejam executados automaticamente a cada alteração no código.

# Uso da Inteligência Artificial no Desenvolvimento (GitHub Copilot)

Durante o desenvolvimento do projeto, o GitHub Copilot foi utilizado como ferramenta de apoio para acelerar a criação da lógica principal de negócio e seus respectivos testes automatizados.
A função central do sistema é responsável por calcular o valor total de um pedido, aplicando regras de desconto conforme o valor da compra. Tanto a função quanto os testes foram gerados com o auxílio do Copilot, utilizando prompts descritivos diretamente no editor de código.

Exemplo de comentário presente no código:

// Gerado com o prompt: "Crie uma função que calcula o total de pedidos aplicando desconto para valores acima de um limite"

Essa abordagem demonstra, de forma prática, como a IA pode reduzir o tempo de desenvolvimento, mantendo clareza e padronização no código produzido.

# Projeto Funcional Desenvolvido

O projeto consiste em uma aplicação simples em Node.js, organizada da seguinte forma:

- src/: contém a lógica principal de negócio.
- tests/: contém os testes automatizados da aplicação.
- package.json: gerenciamento de dependências e scripts.
- .github/workflows/: configuração do pipeline de CI com GitHub Actions.

Os testes automatizados validam os principais cenários da regra de negócio, garantindo que alterações futuras não quebrem o comportamento esperado da aplicação.

# Integração Contínua com GitHub Actions (CI/CD)

Foi configurado um workflow funcional do GitHub Actions, localizado em:

*.github/workflows/nodejs.yml*

Esse workflow é executado automaticamente a cada push ou pull request na branch principal (main) e realiza as seguintes etapas:

1. Faz o checkout do código do repositório.
2. Configura o ambiente Node.js.
3. Instala as dependências do projeto.
4. Executa os testes automatizados.

Essa configuração garante feedback rápido sobre a qualidade do código, reforçando boas práticas de Integração Contínua (CI) e reduzindo a chance de erros chegarem à produção.

# Status do Pipeline (Build)

O status do pipeline de integração contínua pode ser acompanhado diretamente pelo badge abaixo, que indica se o workflow está sendo executado com sucesso:

![CI](https://github.com/Thavi22/AI-Driven-Software-Engineering/actions/workflows/nodejs.yml/badge.svg)

# Considerações Finais sobre o Impacto da IA

A utilização de ferramentas de IA, como o GitHub Copilot, demonstra um impacto significativo na produtividade das equipes de desenvolvimento, especialmente quando combinada com práticas modernas de automação, como testes automatizados e pipelines de CI/CD.
Este projeto evidencia que a IA não substitui o desenvolvedor, mas atua como um acelerador de produtividade, permitindo que o profissional foque em decisões de arquitetura, validação de regras de negócio e qualidade do software entregue.
A integração entre IA + testes + automação representa uma tendência sólida no desenvolvimento moderno, contribuindo para entregas mais rápidas, seguras e sustentáveis.

# Conclusão

O protótipo desenvolvido cumpre o objetivo de demonstrar, de forma prática e conceitual, como um fluxo de desenvolvimento assistido por IA pode equilibrar velocidade e qualidade. A combinação de GitHub Copilot e GitHub Actions mostrou-se eficaz para melhorar a produtividade da equipe e elevar o nível de confiabilidade do processo de desenvolvimento de software.
