# Informações do Projeto
`TÍTULO DO PROJETO`  

> TRABALHO INTERDISCIPLINAR: APLICAÇÕES PARA PROCESSOS DE NEGÓCIOS: Restaurante da Tia Lili

`CURSO` 

> Sistemas de Informação

## Participantes

> - João José Cardoso Ribeiro
> - Luiz Gustavo Gonçalves Soares Dos Reis
> - Pedro Henrique Fernandes Domingues

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
> Nos dias de hoje, a comida rápida e fácil é super importante para muita gente. Por isso, propõe-se um projeto que irá ajudar pessoas a pedirem marmitas de uma maneira mais simples e moderna. Neste trabalho, destaca-se a busca para juntar a tradição da comida caseira com a praticidade da tecnologia. A pretensão deste projeto é tornar o processo de pedir marmitas mais fácil, rápido e de acordo com o que cada pessoa gosta.

## Problema

> Os métodos convencionais de pedidos de marmitas muitas vezes se mostram desafiadores tanto para os clientes quanto para os estabelecimentos. Atrasos, erros de comunicação, pedidos anotados errados são obstáculos frequentes. Além disso, a falta de personalização nos pedidos pode resultar em experiências menos satisfatórias para os consumidores. O projeto visa solucionar esses problemas, tornando o processo de pedir marmitas mais eficiente, personalizado e alinhado às expectativas contemporâneas.
>

## Objetivos

> O objetivo principal deste projeto é desenvolver um sistema de pedidos de marmitas que ofereça uma experiência mais ágil, personalizada e eficiente tanto para os clientes quanto para o restaurante. Neste projeto, é proposta a criação de uma plataforma intuitiva que permita aos usuários explorar o cardápio, personalizar seus pedidos e acompanhar o status de seus pedidos em tempo real. Ao mesmo tempo, o sistema proporcionará aos estabelecimentos uma gestão mais eficaz dos pedidos, reduzindo erros e aumentando a eficiência operacional.
> 

## Justificativa

> A escolha de desenvolver um sistema de pedidos de marmitas é motivada pela necessidade de oferecer uma solução inovadora que facilite o acesso à alimentação de qualidade em um contexto de vida acelerado. Os objetivos específicos foram definidos para abordar desafios comuns enfrentados tanto pelos consumidores, como erros de comunicação e falta de personalização, quanto pelos estabelecimentos, incluindo a gestão de pedidos e a eficiência operacional. Ao priorizar a agilidade, personalização e eficiência, busca-se não apenas atender às demandas imediatas do mercado, mas também impulsionar a inovação e competitividade na indústria alimentícia, alinhando-se com as expectativas contemporâneas.

## Público-Alvo

>O público alvo deste projeto são profissionais com rotinas ocupadas, como trabalhadores de escritório, autônomos e estudantes, famílias que buscam praticidade e variedade na alimentação e entusiastas da alimentação saudável interessados em opções frescas e equilibradas, pessoas em trânsito, como viajantes e motoristas de aplicativos e também empresas em busca de soluções de alimentação para eventos corporativos, outros públicos também podem ser alcançados.
> 
 
# Especificações do Projeto

> Para estabelecer a definição exata do problema e identificar os principais aspectos a serem abordados no projeto, foi necessário realizar um esforço colaborativo com os usuários. A equipe conduziu um processo imersivo, envolvendo a observação dos usuários em seus ambientes naturais e a realização de entrevistas detalhadas. Os dados e insights obtidos nesse processo foram então cuidadosamente estruturados e categorizados em personas e histórias de usuários. Essas personas e histórias serviram como base sólida para o desenvolvimento do projeto, garantindo que as necessidades e expectativas dos clientes e do restaurante fossem atendidas de forma eficaz e precisa.

## Personas e Mapas de Empatia

> **Exemplo de Persona**
> 
> ![Persona1](/docs/relatorio/images/PErsona1.jpg)
> ![Persona2](/docs/relatorio/images/PErsona2.jpg)
> ![Persona3](/docs/relatorio/images/PErsona3.jpg)
> ![Persona4](/docs/relatorio/images/PErsona4.jpg)
> 
>
> **mapa de empatia**
>
> ![MapaEmpatia1](/docs/relatorio/images/mapa1.jpg)
> ![MapaEmpatia2](/docs/relatorio/images/mapa2.jpg)
> ![MapaEmpatia3](/docs/relatorio/images/mapa3.jpg)
> ![MapaEmpatia4](/docs/relatorio/images/mapa4.jpg)
>
>
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

>
> ![HistóriadeUsúario](/docs/relatorio/images/desejos%20persona.jpg)
>

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que os usuários se cadastrem no sistema fornecendo informações básicas, como nome, endereço, número de telefone e e-mail | MÉDIA | 
|RF-002| Permitir que os usuários façam login de forma segura utilizando e-mail/senha ou outras formas de autenticação, como login social.   | MÉDIA |
|RF-003| Possibilitar aos usuários visualizar o cardápio completo com todas as opções de marmitas disponíveis, incluindo descrições, preços e imagens.   | ALTA |
|RF-004| Permitir aos usuários adicionar itens selecionados ao carrinho de compras para posterior compra.   | MÉDIA |
|RF-005| Possibilitar aos usuários visualizar e editar os itens no carrinho antes de finalizar a compra, incluindo alteração de quantidade e remoção de itens.   | ALTA |
|RF-006| Disponibilizar uma interface de administração para gerenciar o cardápio, pedidos, usuários, relatórios de vendas, entre outras funcionalidades.   | ALTA |
|RF-007| Permitir que os usuários personalizem seus pedidos, como escolher acompanhamentos, alterar ingredientes, etc., conforme suas preferências.   | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser capaz de lidar com múltiplos acessos simultâneos sem degradação significativa do desempenho. | ALTA | 
|RNF-002| Deve garantir a segurança dos dados do usuário, incluindo informações pessoais e dados de pagamento. |  ALTA | 
|RNF-003| A interface do usuário deve ser intuitiva e de fácil navegação, proporcionando uma experiência agradável ao usuário. | MÉDIA | 
|RNF-004| O sistema deve ser confiável e estar disponível 24/7, com mínimo tempo de inatividade para manutenção. |  ALTA | 
|RNF-005| Deve ser compatível com uma variedade de dispositivos e navegadores para garantir acessibilidade a todos os usuários. | ALTA | 
|RNF-006| Deve oferecer suporte a múltiplos idiomas e moedas, se aplicável, para atender a uma base de usuários diversificada. |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O sistema deve ser desenvolvido dentro de um prazo definido, levando em consideração as necessidades do negócio. |
|02| Deve cumprir todas as regulamentações e leis locais relacionadas à segurança de dados e comércio eletrônico.        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

> Para solucionar os problemas em evidência, foi elaborado uma interface simples e objetiva para cumprir os requisitos do projeto.

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.png)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

> Devido às entregas incrementais, o grupo decidiu dividir tarefas específicas para cada integrante, com reuniões semanais para acompanhar, tirar dúvidas e todos estarem cientes do andamento de cada detalhe do projeto.


## Divisão de Papéis

> A distribuição dos componentes do grupo, ficou da seguinte forma:

### Scrum Master:

* Vitor Ribeiro Lacerda

### Product Owner:

* Luiz Gustavo Gonçalves Soares Dos Reis

###	Equipe de Desenvolvimento:

* João José Cardoso Ribeiro

* Luiz Gustavo Gonçalves Soares Dos Reis

* Pedro Henrique Fernandes Domingues

> O acompanhamento das tarefas ocorre por meio de reuniões semanais, durante as quais as tarefas em andamento são revisadas. Após a conclusão de cada etapa, verifica-se se todos os interessados estão informados sobre o progresso. Em seguida, novas tarefas são definidas e distribuídas conforme necessário.


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Repositório de código | GitHub | https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2024-1-tia-lili.git | 
|Protótipo Interativo |  Figma | https://www.figma.com/proto/4Qa01m3nE1qLc1lNoUSFKz/Tia-Lili-wireframes?type=design&node-id=12-3&t=h8HIzxR1aQ7VEhhE-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=46%3A175&mode=design | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Visual Studio Code
> - Whatsapp e Discord
> 
> O editor de código foi escolhido porque ele possui uma boa integração com o sistema de versão. As ferramentas de comunicação utilizadas são versáteis. O Whatsapp sendo usado para comunicação durante a semana, tanto para dúvidas e sugestões, enquanto o Discord é utilizado para reuniões, possibilitando fácil compartilhamento de tela, chat de texto e voz. 

## Controle de Versão

> Para versionamento do projeto, os membros do grupo optaram por fazer commits organizados na plataforma GitHub.


# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

> Uma plataforma web intuitiva com interface amigável permite que os clientes explorem o cardápio e personalizem seus pedidos. Essa plataforma é responsiva, funcionando bem em dispositivos móveis e desktops.
Além disso, implementamos um sistema de cadastro e autenticação para clientes e restaurantes. Os clientes podem criar contas, salvar suas preferências e histórico de pedidos. Enquanto isso, os restaurantes têm acesso a um painel de controle para gerenciar pedidos e atualizar o cardápio.
O cardápio é dinâmico, com um banco de dados que armazena informações sobre os pratos disponíveis. Isso permite que os restaurantes adicionem, editem ou removam itens facilmente.
Para personalização de pedidos, os clientes podem escolher ingredientes, tamanhos e acompanhamentos para suas marmitas. Validamos essas escolhas para garantir combinações viáveis.
Por fim, oferecemos aos clientes a possibilidade de acompanhar o status do pedido pelo WhatsApp


## Tecnologias Utilizadas

> Front-end: Porta de Entrada
Linguagens:
HTML: A base da estrutura da página, definindo o conteúdo e organização do que se vê, desde o menu até o pagamento.
CSS: O responsável pelo visual, moldando a aparência e dando uma experiência atraente e intuitiva, para que você encontre o que procura com facilidade.
JavaScript: A alma do bagulho, plataforma com menus dinâmicos, filtros, validação de pedidos.
React: Uma poderosa biblioteca para construção de interfaces visuais em JavaScript.

> Ferramenta:
Visual Studio Code: ideal para  desenvolvimento, oferecendo um ambiente completo com recursos avançados.

> Back-end: O Motor 
Linguagem:
Node.js: A lógica do servidor, garantindo a comunicação eficiente entre o front-end e o banco de dados, orquestrando o fluxo de pedidos, personalizações e acompanhamento do status.
Banco de dados:
MySQL: Onde são guardados, armazenados e organizados de forma confiável e segura todas as informações sobre pratos, pedidos, clientes e restaurantes, garantindo a precisão e a confiabilidade do sistema.

> Criação: criativo
Figma e Canva: As ferramentas de design que transformaram ideias em protótipos visuais impressionantes, guiando o desenvolvimento com clareza e precisão, desde a interface amigável.
Notificações: atualizações

> Plataforma Wapp: A comunicação, garantindo que se receba notificações relevantes e oportunas, informando sobre o status do pedido, promoções e novidades.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Um navegador (representando o cliente) que utiliza HTML, CSS e JavaScript para exibir páginas web. Essas páginas interagem com o banco de dados, onde dados podem ser armazenados. Além disso, há um componente de pedidos e a conexão com a Internet. A solução é hospedada no Google.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/800c1722-4e5e-4c91-bed1-3c293c65a787.jpeg)


# Avaliação da Aplicação

> O objetivo deste projeto é desenvolver um sistema de pedidos de marmitas que ofereça uma experiência ágil e personalizada tanto para os clientes quanto para o restaurante. A seguir, descrevo os passos realizados e os cenários de teste aplicados.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Cadastro e Login:
Cenário: Um “novo” cliente cria uma conta.
Teste: Verificamos se o cadastro é bem-sucedido e se o cliente pode fazer login.
Exploração do Cardápio:
Cenário: O cliente acessa o cardápio.
Teste: Verificamos se os pratos estão listados corretamente e se as informações são exibidas corretamente.
Personalização do Pedido:
Cenário: O cliente escolhe um prato e personaliza com ingredientes extras.
Teste: Verificamos se as opções de personalização funcionam corretamente.
Acompanhamento do Pedido:
Cenário: O cliente faz um pedido e deseja acompanhar o status.
Teste: Verificamos se o cliente pode ver o status do pedido em tempo real.
Pagamento:
Cenário: O cliente finaliza e vai para o pagamento.
Teste: Verificamos se o processo de pagamento é que o usuário solicitou e se a quantia está correta .
Gerenciamento pelo Restaurante:
Cenário: O restaurante acessa o painel de controle.
Teste: Verificamos se o restaurante pode gerenciar pedidos e atualizar o cardápio.
conclusion
Os testes “caseiros” nos ajudaram a validar a aplicação e a garantir que os requisitos estejam sendo atendidos. Continuaremos refinando e melhorando o sistema com base nos feedbacks dos usuários. 
Nesta plataforma, você desfruta de uma experiência gastronômica online deliciosa e confiável, testada rigorosamente com o Jasmine.

## Ferramentas de Testes (Opcional)

> Utilizamos o Jasmine para garantir que:
A plataforma funcione perfeitamente em qualquer dispositivo.
Seus pedidos sejam processados com rapidez e precisão.
Seus dados estejam sempre seguros.
Sua experiência seja sempre impecável e satisfatória

## Registros de Testes

> Testes como usuários da Tia Lili:
Realizamos testes como um grupo de usuários da Tia Lili que já fizeram pedidos na plataforma. A seguir, um resumo dos resultados:

> Pontos fortes:
Intuitividade: Interface fácil de usar, navegação simples pelo cardápio e personalização de pedidos.
Acompanhamento em tempo real: Status do pedido atualizado em tempo real, proporcionando transparência aos clientes.
Autenticação e segurança: Sistema de login e cadastro funcionando bem, garantindo a segurança dos dados dos usuários.

> Áreas de melhoria:
Performance: As vezes tem alguma lentidão no carregamento do cardápio e finalização de pedidos em alguns casos. 
Feedback visual: Muita informação visual.

> Próximos passos:
Otimização de desempenho: Revisão do código e otimização de consultas ao banco de dados para melhorar a velocidade de carregamento.
Testes de usabilidade: Realização de novos testes de usabilidade com mais usuários para identificar outras áreas de melhoria.
Feedback visual aprimorado: Implementação de confirmações visuais após cada ação do usuário para tornar a experiência mais satisfatória.

> Conclusão:
Os testes realizados foram valiosos para identificar pontos fortes e áreas de melhoria na plataforma. As próximas etapas visam otimizar o desempenho, aprimorar o design responsivo, melhorar o feedback visual e corrigir as falhas detectadas. Acreditamos que, com essas melhorias, a plataforma oferecerá uma experiência ainda mais satisfatória para os clientes da Tia Lili.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> - Figma (https://www.figma.com/pt-br/)
> - Canva (https://www.canva.com)
> - Jasmine (https://jasmine.github.io)
> - MySQL (https://www.mysql.com)
> - VScode (https://code.visualstudio.com)
> - React (https://react.dev)
> - Copilot (https://copilot.microsoft.com)
> - GitHub (https://github.com)
> - whatsapp (https://web.whatsapp.com)

