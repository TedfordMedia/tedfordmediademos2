
import React, { useState } from 'react';
import useSceneStore from '../useSceneStore';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../styles.css';

const MySlidersHand = (props) => {
    const skinOpacty = useSceneStore((state) => state.skinOpacty);
    const boneOpacity = useSceneStore((state) => state.boneOpacity);
    const brainOpacity = useSceneStore((state) => state.brainOpacity);
    const opacityOpen = useSceneStore((state) => state.opacityOpen);
    const handObjectX = useSceneStore(state => state.handObjectX)
    const handObjectY = useSceneStore(state => state.handObjectY)
    const handObjectZ = useSceneStore(state => state.handObjectZ)

    return (
        <>
            {opacityOpen && (
                <fieldset className='fieldseta'>
                    <div className="checkboxes">
                        <Box style={{ display: props.hidebrain ? 'none' : 'block' }}>
                            <Typography sx={{ marginBottom: '0px' }} gutterBottom>Cross Pos X</Typography>
                            <Slider
                                size="small"
                                value={handObjectX}
                                min={0}
                                max={1}
                                step={0.01}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{ padding: '6px 0' }}
                                onChange={(e, value) => useSceneStore.setState({ handObjectX: value })}
                            />
                        </Box>
                        <Box style={{ display: props.hidebrain ? 'none' : 'block' }}>
                            <Typography sx={{ marginBottom: '0px' }} gutterBottom>Cross Pos Y</Typography>
                            <Slider
                                size="small"
                                value={handObjectY}
                                min={-1}
                                max={1}
                                step={0.01}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{ padding: '6px 0' }}
                                onChange={(e, value) => useSceneStore.setState({ handObjectY: value })}
                            />
                        </Box>
                        <Box style={{ display: props.hidebrain ? 'none' : 'block' }}>
                            <Typography sx={{ marginBottom: '0px' }} gutterBottom>Cross Pos Z</Typography>
                            <Slider
                                size="small"
                                value={handObjectZ}
                                min={-1}
                                max={1}
                                step={0.01}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{ padding: '6px 0' }}
                                onChange={(e, value) => useSceneStore.setState({ handObjectZ: value })}
                            />
                        </Box>
                    </div >
                </fieldset>
            )}
        </>
    );
};

export default MySlidersHand;
