*Nome do Projeto*: Montagem e visualização de uma cena 3D básica
*Tecnologia Utilizada*: JavaScript + Three.js (biblioteca gráfica WebGL)

### Objetivo

O projeto tem como finalidade criar uma aplicação web que visualize e manipule uma cena 3D contendo três objetos geométricos básicos, cubo, esfera e torus, com possibilidade de aplicar transformações e movimentar a câmera livremente. Sendo Torus é uma figura geométrica em um formato anelar, da qual encontrei na própria documentação da biblioteca: https://threejs.org/docs/#api/en/geometries/TorusGeometry.

### Modelagem e Componentes da Cena

Cubo: posicionado à esquerda da cena, com a cor vermelha.
Esfera: localizada no centro, com textura oriunda de um meme de gato.
Torus: posicionado à direita, com uma cor púrpura.
Todos os objetos usam malhas padrão (Mesh) do Three.js com materiais texturizados aplicados por meio do THREE.TextureLoader.

### Iluminação

Foi adicionada uma luz direcional para permitir a visualização clara das texturas e relevos dos objetos. Essa luz simula uma fonte de iluminação como o sol.

### Interatividade
O usuário pode mover a câmera livremente com o mouse (zoom, rotação e pan) usando OrbitControls.

Para cada objeto, há botões específicos para ativar/desativar:
🔁 Rotação contínua em torno de um eixo
↕ Translação com movimento oscilante
🔍 Escala animada (pulsações suaves)
