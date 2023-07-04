import react, { Suspense } from "react";
import * as THREE from "three";
import useSceneStore from '../useSceneStore';

const GridParts = (props) => {
    const gridDivShow = useSceneStore((state) => state.gridDivShow);

    return (
        <>
            {gridDivShow && (
                <>
                    <primitive position={[0, .001, 0]} object={new THREE.AxesHelper(1)} />
                    <primitive object={new THREE.GridHelper(1, 20)} />
                </>
            )}
        </>
    )
}

export default GridParts