![Imagem de capa do curso "Angular: construa um Design System com Nx e Storybook", que faz parte da formação "Angular Design System". O logotipo do GitHub e o nome "/alura-cursos" estão no canto superior esquerdo, e o logotipo da Alura no canto superior direito. Na parte inferior direita, há uma indicação de que o curso faz parte da trilha de Front-end.](./thumb.png)

# Design System da Alfabit

Monorepo criado para implementação do Design System da empresa fictícia Alfabit, uma empresa de consultoria de software. Reconhecendo a importância do design consistente e intuitivo em todas as suas plataformas e produtos, a Alfabit decidiu investir em um Design System de ponta.

![Interface do Storybook exibindo o componente Input. À esquerda, há um menu com uma lista de componentes organizados sob as categorias "Moléculas" e "Átomos", além de algumas páginas de documentação, como "Introdução". À direita, está a pré-visualização interativa do Input com a opção de visualizar o código fonte, além de uma seção com campos para interagir com o componente dinamicamente. A opção 'multiline' indica que o campo pode aceitar múltiplas linhas de texto, ou seja, o usuário pode pressionar 'enter' para iniciar uma nova linha. A opção 'label' permite adicionar um rótulo ao campo, indicando qual tipo de informação deve ser inserida.](./project-thumb.png)

## 🔨 Funcionalidades do projeto

As bibliotecas de botão e de input criadas no monorepo (mono-repositório) podem ser visualizadas em um servidor do Storybook, onde foi feita uma documentação interativa dos componentes. A publicação das bibliotecas foi automatizada com o Nx Release e o Chromatic foi utilizado para publicação do Storybook e automação de testes visuais.

O próximo passo agora é desenvolver mais componentes do Design System: o `typography` e o `modal`. Com esses novos componentes, iremos lidar com dependências entre bibliotecas e suas publicações.

Acesse o [Figma do Design System](https://www.figma.com/community/file/1402315008064949507).

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas pra isso são:

- **Design System e Atomic Design**: criados pela equipe de design para organizar o Design System da empresa
- **Angular**: framework utilizado para implementação dos componentes
- **Nx e monorepo**: utilizados para criar e gerenciar aplicações e bibliotecas de forma produtiva
- **Storybook**: ferramenta para criação de documentação interativa
- **Chromatic**: ferramenta para publicação do Storybook e automação de testes visuais
- **Nx Release**: recurso do Nx que facilita a automatização da publicação de bibliotecas

## 🛠️ Abrir e rodar o projeto

Após baixar ou clonar o projeto, instale as dependências:

```bash
npm i
```

Em seguida, execute o seguinte comando para subir o servidor do Storybook:

```bash
npx nx run storybook-host:storybook
# ou:
npx nx storybook storybook-host
```
