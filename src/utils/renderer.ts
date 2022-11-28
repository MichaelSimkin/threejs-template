import { WebGLRenderer } from "three";

export const resizeRenderer = (renderer: WebGLRenderer) => {
    const { clientWidth, clientHeight, width, height } = renderer.domElement;
    if (clientWidth !== width || clientHeight !== height) {
        renderer.setSize(clientWidth, clientHeight, false);
    }
    return { width: clientWidth, height: clientHeight };
};
