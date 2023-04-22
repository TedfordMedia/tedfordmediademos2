import React from 'react';
import useSceneStore from '../useSceneStore';
import '../styles.css';

const TransformsDiv = () => {
    const transformType = useSceneStore((state) => state.transformType);
    const handleOptionChange = (event) => {
        useSceneStore.setState({ transformType: event.target.value });
    };
    return (
        <div id="transformsdiv">
            <div>
                <label>
                    Transform type:&nbsp;
                    <select className={'theselect'} value={transformType} onChange={handleOptionChange}>
                        <option value="translate">Move</option>
                        <option value="rotate">Rotate</option>
                        <option value="scale">Scale</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default TransformsDiv;
