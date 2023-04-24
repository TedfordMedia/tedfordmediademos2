import React from 'react';
import useSceneStore from '../useSceneStore';
import '../styles.css';

const ShowOperatorsDiv = () => {
    const showOperations = useSceneStore((state) => state.showOperations);

    return (
        <div id="showoperatorsdiv">
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.8' }}>
                <input type="checkbox"
                    checked={showOperations}
                    style={{ cursor: 'pointer' }}
                    onChange={() => useSceneStore.setState({ showOperations: !showOperations })}
                />
                <span>Show Shapes</span>
            </label>
        </div>
    );
};

export default ShowOperatorsDiv;
