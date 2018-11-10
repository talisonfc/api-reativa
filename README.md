# API Reativa

A interação entre vários usuários de uma mesma aplicação pode ser realizada em tempo real por meio de uma api reativa. A reatividade no contexto de apis permite com todos os usuários de uma aplicação perceba alterações no estado dos dados sem que o usário faça uma requisição, com a reatividade o usuário apenas escuta os eventos disparados pela api.

Este tipo de tecnologia pode ser util quando é necessário compartilhar o mesmo espaço de trabalho entre vários usuários, ou mesmo para fins de monitoramento.

A ideia é substituir os end-points tratados como metodos http, por eventos num websocket. Assim, as requisições a uma API Rest é o mesmo que emitir o evento para a api. As respostas são equivalentes a escutar eventos da api.

# Como executar

Para executar este projeto basta entrar nos repositorios API e CLIENT, instalar as dependências. No primeiro repositorio, executar usando o comando node index.js, no segundo, usando ionic serve (o CLIENT é uma aplicação Ionic).
