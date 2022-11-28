import { OrthographicCamera, PerspectiveCamera } from "three";

export const resizePerspectiveCamera = (camera: PerspectiveCamera, width: number, height: number) => {
    const aspect = width / height;
    if (camera.aspect !== aspect) {
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
    }
};

export const resizeOrthographicCamera = (camera: OrthographicCamera, width: number, height: number) => {
    const { left, right, top, bottom } = camera;
    const newRight = (width / height) * top;
    if (left !== -newRight || right !== newRight || bottom != -top) {
        camera.left = -newRight;
        camera.right = newRight;
        camera.bottom = -top;
        camera.updateProjectionMatrix();
    }
};
