import React from 'react';
import useSceneStore from '../useSceneStore';
import '../styles.css';

const GridSelectDiv = () => {
    const gridDivShow = useSceneStore((state) => state.gridDivShow);

    return (
        <div id="showoperatorsdiv" className='basicinput'>
            <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox"
                    checked={gridDivShow}
                    style={{
                        cursor: 'pointer', paddingLeft: '100px'
                    }}
                    onChange={() => useSceneStore.setState({ gridDivShow: !gridDivShow })}
                />
                <span style={{ cursor: 'pointer', paddingLeft: '.4rem' }}>Grid</span>
            </label>
        </div>
    );
};

export default GridSelectDiv;
