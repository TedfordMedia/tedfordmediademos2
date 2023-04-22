
import React from 'react';
import useSceneStore from '../useSceneStore';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconsMenu from './IconsMenu';
import { ReactComponent as CloseIcon } from './Icon_close.svg';

import '../styles.css';

const LightingInput = () => {
    const ambientIntensity = useSceneStore((state) => state.ambientIntensity);
    const directionalIntensity = useSceneStore((state) => state.directionalIntensity);
    const lightingOpen = useSceneStore((state) => state.lightingOpen);

    return (
        <>
            <IconsMenu />
            {lightingOpen && (
                <div className='sliderdiv mylightdiv'>
                    <Box  >
                        <Typography style={{ lineHeight: 1 }} pb={0} pt={1}>Ambient</Typography>
                        <Slider
                            size="small"
                            value={ambientIntensity}
                            min={0}
                            max={1}
                            step={0.01}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(e, value) => useSceneStore.setState({ ambientIntensity: value })}
                        />
                    </Box>
                    <Box >
                        <Typography style={{ lineHeight: 1 }} pb={0} pt={0}>Directional</Typography>
                        <Slider
                            size="small"
                            value={directionalIntensity}
                            min={0}
                            max={1.5}
                            step={0.01}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(e, value) => useSceneStore.setState({ directionalIntensity: value })}
                        />
                    </Box>
                    <CloseIcon className={'closeicon'} style={{ fill: lightingOpen ? 'white' : 'black' }} onClick={() => useSceneStore.setState({ lightingOpen: false })} />
                </div>
            )}
        </>
    );
};

export default LightingInput;
