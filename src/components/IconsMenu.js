import React from 'react';
import useSceneStore from '../useSceneStore';
import { ReactComponent as OpacityIcon } from './opacity.svg';
import { ReactComponent as BulbIcon } from './bulb.svg';

import '../styles.css';

const LightingInput = () => {

    const lightingOpen = useSceneStore((state) => state.lightingOpen);
    const opacityOpen = useSceneStore((state) => state.opacityOpen);

    return (
        <div id={"iconsdiv"}>
            <BulbIcon fill='yellow' className={'topicon'} style={{ fill: lightingOpen ? 'white' : 'gray' }} onClick={() => useSceneStore.setState({ lightingOpen: !lightingOpen })} />
            <OpacityIcon fill='yellow' className={'topicon'} style={{ fill: opacityOpen ? 'white' : 'gray' }} onClick={() => useSceneStore.setState({ opacityOpen: !opacityOpen })} />
        </div>
    );
};

export default LightingInput;
