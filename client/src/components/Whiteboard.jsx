import { useEffects, useRef } from "react";
import { fabric } from "fabric";

function Whiteboard() {
    const canvasRef = useRef(null);

    useEffects(() => {
        const canvas = new fabric.Canvas(canvasRef.current);
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} id="c" width={800} height={600} />
        </div>
    );
}

export default Whiteboard;