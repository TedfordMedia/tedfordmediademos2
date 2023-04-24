import React from 'react';
import useSceneStore from '../useSceneStore';
import '../styles.css';

const AutoRotateDiv = () => {
    const autoRotate = useSceneStore((state) => state.autoRotate);

    return (
        <div id="showoperatorsdiv">
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.8' }}>
                <input type="checkbox"
                    checked={autoRotate}
                    style={{ cursor: 'pointer' }}
                    onChange={() => useSceneStore.setState({ autoRotate: !autoRotate })}
                />
                <span>AutoRotate</span>
            </label>
        </div>
    );
};

export default AutoRotateDiv;
