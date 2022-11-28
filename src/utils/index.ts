import { Camera, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { resizeOrthographicCamera, resizePerspectiveCamera } from "./camera";
import { resizeRenderer } from "./renderer";

export const render = (renderer: WebGLRenderer, scene: Scene, camera: Camera) => {
    const { width, height } = resizeRenderer(renderer);

    if (camera instanceof PerspectiveCamera) resizePerspectiveCamera(camera, width, height);
    if (camera instanceof OrthographicCamera) resizeOrthographicCamera(camera, width, height);

    renderer.render(scene, camera);
};

export { resizeRenderer };
