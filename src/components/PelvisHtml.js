import React from 'react';
import LogoDiv from './LogoDiv';
import LightingInput from './LightingInput';
import ObjectDetsInput from './ObjectDetsInput';
import BoneDecalx from './BoneDecalHtml';
import TransformsDiv from './TransformsDiv';
import OpacityHtml from './OpacityHtml';
import '../styles.css';

const BrainHtml = () => {
    return (
        <>
            <LogoDiv />
            <OpacityHtml hideskin hidebrain />
            <BoneDecalx />
            <LightingInput />
            <ObjectDetsInput />
        </>
    );
};

export default BrainHtml;
