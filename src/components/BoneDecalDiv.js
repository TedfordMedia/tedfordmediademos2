import React from 'react';
import useSceneStore from '../useSceneStore';
import '../styles.css';

const BoneDecalDiv = () => {
    const boneDecal = useSceneStore((state) => state.boneDecal);

    return (
        <div id="bonedecaldiv">
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.8' }}>
                <input type="checkbox"
                    checked={boneDecal}
                    onChange={() => useSceneStore.setState({ boneDecal: !boneDecal })}
                />
                <span>Bone Section Demo</span>
            </label>
        </div>
    );
};

export default BoneDecalDiv;
