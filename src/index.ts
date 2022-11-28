import { GUI } from "dat.gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { render } from "./utils";
import { resizeRenderer } from "./utils/renderer";

const stats = Stats();
document.body.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
const { width, height } = resizeRenderer(renderer);
renderer.setClearColor(0x000000, 0);

const scene = new THREE.Scene();

const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const gui = new GUI();
const cubeFolder = gui.addFolder("Cube");
cubeFolder.add(cube.scale, "x", 0, 5, 0.1);
cubeFolder.add(cube.scale, "y", 0, 5, 0.1);
cubeFolder.add(cube.scale, "z", 0, 5, 0.1);
cubeFolder.open();
const cameraFolder = gui.addFolder("Camera");
cameraFolder.add(camera.position, "z", 0, 10);
cameraFolder.open();

const animate: FrameRequestCallback = (time) => {
    const seconds = time / 1000;

    cube.rotation.x = cube.rotation.y = cube.rotation.z = seconds;

    controls.update();

    render(renderer, scene, camera);

    stats.update();

    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
