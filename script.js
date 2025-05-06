// Cena, câmera, renderizador
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controles de câmera
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Luz direcional
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 7.5);
scene.add(light);

// Figuras Geométricas

// Cubo
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
cube.position.set(-2, 0, 0);
scene.add(cube);

// Esfera
const texture = new THREE.TextureLoader().load('meme.png');
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({ map: texture })
);
sphere.position.set(0, 0, 0);
scene.add(sphere);

// Torus
const torus = new THREE.Mesh(
  new THREE.TorusGeometry( .5, .2, 16, 12 ),
  new THREE.MeshBasicMaterial( { color: '#3b0764' } )
);

torus.position.set(2, 0, 0);
scene.add(torus);

// Painel de controle das animações (p/ elemento)
const state = {
  cube:     { rotate: false, translate: false, scale: false },
  sphere:   { rotate: false, translate: false, scale: false },
  torus: { rotate: false, translate: false, scale: false }
};

let torusDirection = 1;

// Função de alternância chamada pelos botões
window.toggle = (object, action) => {
  state[object][action] = !state[object][action];
};

// Animação
function animate() {
  requestAnimationFrame(animate);

  // Cubo
  if (state.cube.rotate) {
    cube.rotation.y += 0.03;
  }
  if (state.cube.translate) {
    cube.position.y = Math.sin(Date.now() * 0.002);
  }
  if (state.cube.scale) {
    const s = 1 + 0.2 * Math.sin(Date.now() * 0.003);
    cube.scale.set(s, s, s);
  }

  // Esfera
  if (state.sphere.rotate) {
    sphere.rotation.x += 0.02;
  }
  if (state.sphere.translate) {
    sphere.position.y = 0.5 * Math.cos(Date.now() * 0.002);
  }
  if (state.sphere.scale) {
    const s = 1 + 0.3 * Math.sin(Date.now() * 0.004);
    sphere.scale.set(s, s, s);
  }

  // Torus
  if (state.torus.rotate) {
    torus.rotation.z += 0.02;
  }
  if (state.torus.translate) {
    torus.position.x += torusDirection * 0.01;
    if (torus.position.x > 3 || torus.position.x < 1.5) {
      torusDirection *= -1;
    }
  }
  if (state.torus.scale) {
    const s = 1 + 0.4 * Math.sin(Date.now() * 0.003);
    torus.scale.y = s;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();
