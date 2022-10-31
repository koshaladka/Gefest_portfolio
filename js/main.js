import * as THREE from './../node_modules/three/build/three.module.js';

// Настройки сцены
const scene = new THREE.Scene();
const spaceTexture = new THREE.TextureLoader().load('./images/space.jpg');
scene.background = spaceTexture;

// Настройка камеры
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// Настройка renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, 0);
document.body.appendChild( renderer.domElement );
window.addEventListener('resize', () => {
    renderer.setSize( window.innerWidth, window.innerHeight);
    scene.add(rusGidro);
});

// Глобальное освещение
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

/* // Настройки куба
const cubeTexture = new THREE.TextureLoader().load('images/cube.jpg');
const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map: cubeTexture }));
cube.position.z = -2;
cube.rotation.y = 10;
cube.rotation.x = 10;
scene.add(cube); */


// Настройки arMoscow
const arMoscowTexture = new THREE.TextureLoader().load('./images/neon7.jpg');
const arMoscow = new THREE.Mesh(
	new THREE.SphereGeometry(1, 32, 32),
	new THREE.MeshStandardMaterial({
		map: arMoscowTexture,
	})
);
arMoscow.position.z = -10;
arMoscow.position.x = 4;
arMoscow.position.y = -1;
arMoscow.scale.set(0.5, 0.5, 0.5);
scene.add(arMoscow);

// Настройки rusGidro
const rusGidroTexture = new THREE.TextureLoader().load('./images/neon3.jpg');
const rusGidro = new THREE.Mesh(
	new THREE.BoxGeometry(),
	new THREE.MeshStandardMaterial({
		map: rusGidroTexture,
	})
);
rusGidro.position.z = -4;
scene.add(rusGidro);

// Настройки Box4
const box4Texture = new THREE.TextureLoader().load('./images/neon4.jpg');
const box4 = new THREE.Mesh(
	new THREE.BoxGeometry(),
	new THREE.MeshStandardMaterial({
		map: box4Texture,
	})
);
box4.position.z = -14;
scene.add(box4);

// Настройки boxCode
const boxCodeTexture = new THREE.TextureLoader().load('./images/space2.jpg');
const boxCode = new THREE.Mesh(
	new THREE.SphereGeometry(1, 64, 64),
	new THREE.MeshStandardMaterial({
		map: boxCodeTexture,
	})
);
boxCode.position.z = -20;
boxCode.position.x = -5;
boxCode.position.y = 4;
scene.add(boxCode);

// Настройки rutek
const rutekTexture = new THREE.TextureLoader().load('./images/neon3.jpg');
const rutek = new THREE.Mesh(
	new THREE.SphereGeometry(1, 64, 64),
	new THREE.MeshStandardMaterial({
		map: rutekTexture,
	})
);
rutek.position.z = -10;
rutek.position.x = -5;
rutek.position.y = -4;
scene.add(rutek);

// Добавление звезд на фоне
function addStar() {
	const geometry = new THREE.SphereGeometry(0.1, 16, 16);
	const material = new THREE.MeshStandardMaterial({ color: 0xe103d1 });
	const star = new THREE.Mesh(geometry, material);

	const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(90));

	star.position.set(x, y, z);
	scene.add(star);
}
Array(400).fill().forEach(addStar);

// Анимация | каждый кадр
function animate() {
	requestAnimationFrame(animate);

	rusGidro.rotation.y += 0.003;
	rusGidro.rotation.x += 0.002;
	rusGidro.rotation.z += 0.002;

    arMoscow.rotation.y += 0.003;
	arMoscow.rotation.x += 0.002;
	arMoscow.rotation.z += 0.002;

    rutek.rotation.y += 0.003;
	rutek.rotation.x += 0.002;
	rutek.rotation.z += 0.003;

	
	boxCode.rotation.y += 0.003;
	boxCode.rotation.x += 0.002;
	boxCode.rotation.z += 0.003;

	
	box4.rotation.y += 0.003;
	box4.rotation.x += 0.002;
	box4.rotation.z += 0.003;

	renderer.render(scene, camera);
}
// Запуск анимации
animate();

// Событие для прокрутки
document.body.onscroll = handlerScroll;
function handlerScroll() {
	const t = document.body.getBoundingClientRect().top;

	/* if(arMoscow.rotation.y > 0 && arMoscow.rotation.x > 0) {
		arMoscow.rotation.y -= 0.01;
		arMoscow.rotation.x -= 0.01;
	}


	if ( camera.position.z < -1.4 ) {
		arMoscow.rotation.y = 0;
		arMoscow.rotation.x = 0;
		if( rusGidro.position.x > -0.8 ) {
			rusGidro.position.x -= 0.02;
            rutek.position.x += 0.02;
            rutek.position.y += 0.01;
		}
	} else {
		rusGidro.position.x = 0;
	} */

	camera.position.z = t * 0.001;
}