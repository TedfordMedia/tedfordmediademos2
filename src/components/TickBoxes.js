
import React from 'react';
import useSceneStore from '../useSceneStore';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../styles.css';

const RedGreen = () => {
    const brain = useSceneStore((state) => state.brain);
    const skin = useSceneStore((state) => state.skin);
    const boneOpacity = useSceneStore((state) => state.boneOpacity);
    const ambientIntensity = useSceneStore((state) => state.ambientIntensity);
    const directionalIntensity = useSceneStore((state) => state.directionalIntensity);

    return (
        <div className="checkboxes">

            <div className='sliderdiv'>
                <label>
                    <input type="checkbox" checked={brain}
                        onChange={() => useSceneStore.setState({ brain: !brain })}
                    /><span>Brain</span>
                </label>

                <label>
                    <input type="checkbox"
                        checked={skin}
                        onChange={() => useSceneStore.setState({ skin: !skin })}
                    /><span>Skin </span>

                    <Box >
                        <Typography gutterBottom>Bone</Typography>
                        <Slider
                            size="small"
                            value={boneOpacity}
                            min={0}
                            max={1}
                            step={0.1}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(e, value) => useSceneStore.setState({ boneOpacity: value })}
                        />
                    </Box>
                </label>
                <Box >
                    <Typography gutterBottom>Bone</Typography>
                    <Slider
                        size="small"
                        value={boneOpacity}
                        min={0}
                        max={1}
                        step={0.1}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e, value) => useSceneStore.setState({ boneOpacity: value })}
                    />
                </Box>
            </div>
            <div className='sliderdiv mylightdiv'>
                <Box >
                    <Typography gutterBottom>Ambient</Typography>
                    <Slider
                        size="small"
                        value={ambientIntensity}
                        min={0}
                        max={1}
                        step={0.05}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e, value) => useSceneStore.setState({ ambientIntensity: value })}
                    />
                </Box>
                <Box >
                    <Typography gutterBottom>Directional</Typography>
                    <Slider
                        size="small"
                        value={directionalIntensity}
                        min={0}
                        max={1.5}
                        step={0.05}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e, value) => useSceneStore.setState({ directionalIntensity: value })}
                    />
                </Box>
            </div>
        </div >
    );
};

export default RedGreen;
