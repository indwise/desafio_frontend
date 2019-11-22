# Desafio indWise Frontend

Faça um fork deste repositório e comece a trabalhar no código!

## Objetivos

Utilizando os frameworks de sua preferência crie uma visualização de dados para resolver os seguintes casos de uso:

Como gestor de produção; Quero saber quanto foi produzido de cada produto no dia; Para entender se bati as metas produtivas.
Como gestor de produção; Quero saber quanto foi a produção em litros de cada produto no turno; Para entender o desempenho por turno.
Como gestor de produção; Quero saber o OEE por dia; Para entender como está variando meu desempenho;
Como gestor de produção; Quero saber quantos produtos/h estão rodando ao longo do dia. Para entender quedas de desempenho.

Utilize bibliotecas de visualização que disponham de efeitos visuais como gráficos e capriche no CSS. Um extra é a utilização dc.js ou crossfilter.

O frontend deve ser iniciado com apenas um comando (ex. npm start dev com webpack-dev-server) ou então utilizando um conteiner docker.

## Backend e APIs

O backend foi implementado utilizando `sails.js`. Para iniciar o backend em localhost:1337/:

``npm install``
``npm run dev``

### API /productionTable/find

Retorna um array de production. Cada entrada do array é um produto que foi produzido.

Campos:
- **hi** (Hardware Id) : Identificador do coletor que gerou os dados
- **shiftName**: Identificador do turno
- **pt** (production timestamp): Horário de início da produção em ISODate.
- **productId**: Identificador do produto (código ERP)
- **drtms** (Duration Milliseconds): Duração da produção e milissegundos.
- **referenceDay**: Dia ao qual a produção é referente.
- **createdAt** : Horário que dado foi criado no banco de dados

Campos não-necessários:
- **cycleSignalName**: Identificador do sinal que gerou o ciclo de produção.
- **sslp** (Seconds since last production): Campo legado

### API /product/find

Retorna um array de product. Cada entrada do array é a descrição de um produto.

Campos:
- **type** : Unidade ou fardo (contém multiplos internos).
- **productId**: Identificador do produto (código ERP)
- **label**: Nome bonito.
- **productId**: Identificador do produto (código ERP)
- **unitSize**: Tamanho do produto na unidade `unitLabel`.
- **unitLabel**: Unidade utilizada para o produto.

Campos não-necessários:
- **expectedProductivity**: Produtividade de máquina esperada.
- **bundleMultiplier**: Multiplicador de fardo

### API /product/find

Retorna um array de oee. Cada entrada do array é o [OEE](https://en.wikipedia.org/wiki/Overall_equipment_effectiveness) de um dia.

Campos:
- **referenceDay**: Dia ao qual a produção é referente.
- **productivity**: Fator Produtividade do OEE. %.
- **availability**: Fator Disponibilidade do OEE. %
- **quality**: Fator Qualidade do OEE. %
- **oee**: OEE. %.
