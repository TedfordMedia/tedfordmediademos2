
import React from 'react';
import useSceneStore from '../useSceneStore';
import { ReactComponent as CloseIcon } from './Icon_close.svg';
import TransformsDiv from './TransformsDiv';
import '../styles.css';

const ObjectDetsInput = () => {

    const bottomPanelOpen = useSceneStore((state) => state.bottomPanelOpen);
    const brainMarkers = useSceneStore((state) => state.brainMarkers);
    const selectedMarker = useSceneStore((state) => state.selectedMarker);

    const colors = ['blue', 'red', 'green', 'white', 'yellow', 'cyan', 'magenta', 'black'];

    function whenClick(e) {
        useSceneStore.setState({ selectedMarker: null });
        useSceneStore.setState({ bottomPanelOpen: false })
    }
    function colorClick(e) {
        brainMarkers[selectedMarker].current.material.color.set(e.target.style.backgroundColor);
    }

    return (
        <>
            {bottomPanelOpen && (
                <div className='sliderdiv objectinputdiv'>
                    {/* <div>hello</div> */}
                    <CloseIcon className={'closeicon'} style={{ fill: bottomPanelOpen ? 'white' : 'black' }} onClick={(e) => whenClick(e)} />
                    <TransformsDiv />
                    <div className="squares-container">
                        {colors.map((color) => (
                            <div
                                key={color}
                                className="square"
                                style={{ backgroundColor: color }}
                                onClick={(e) => colorClick(e)}
                            ></div>
                        ))}
                    </div>
                </div>

            )}
        </>
    );
};

export default ObjectDetsInput;
