
import React, { useState } from 'react';
import useSceneStore from '../useSceneStore';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../styles.css';

const MySliders = (props) => {
    const skinOpacty = useSceneStore((state) => state.skinOpacty);
    const boneOpacity = useSceneStore((state) => state.boneOpacity);
    const brainOpacity = useSceneStore((state) => state.brainOpacity);
    const opacityOpen = useSceneStore((state) => state.opacityOpen);

    return (
        <>
            {opacityOpen && (
                <fieldset className='fieldseta'>
                    <div className="checkboxes">
                        <Box style={{ display: props.hidebrain ? 'none' : 'block' }}>
                            <Typography sx={{ marginBottom: '0px' }} gutterBottom>Brain</Typography>
                            <Slider
                                size="small"
                                value={brainOpacity}
                                min={0}
                                max={1}
                                step={0.01}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{ padding: '6px 0' }}
                                onChange={(e, value) => useSceneStore.setState({ brainOpacity: value })}
                            />
                        </Box>
                        <Box style={{ display: props.hideskin ? 'none' : 'block' }}>
                            <Typography sx={{ marginBottom: '0px' }} gutterBottom>Skin</Typography>
                            <Slider
                                size="small"
                                value={skinOpacty}
                                min={0}
                                max={1}
                                step={0.01}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{ padding: '6px 0' }}
                                onChange={(e, value) => useSceneStore.setState({ skinOpacty: value })}
                            />
                        </Box>
                        <Box >
                            <Typography sx={{ marginBottom: '0px' }} gutterBottom>Bone</Typography>
                            <Slider
                                size="small"
                                value={boneOpacity}
                                min={0}
                                max={1}
                                step={0.01}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{ padding: '6px 0' }}
                                onChange={(e, value) => useSceneStore.setState({ boneOpacity: value })}
                            />
                        </Box>
                    </div >
                </fieldset>
            )}
        </>
    );
};

export default MySliders;
