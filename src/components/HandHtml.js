import React from 'react';
import LogoDiv from './LogoDiv';
import Operatorsx from './ShowOperatorsHtml';
import Autorotatex from './AutoRotateHtml';
import HandControlsHtml from './HandControlsHtml';
import '../styles.css';

const HandHtml = () => {
    return (
        <>
            <LogoDiv />
            <HandControlsHtml />
            <Operatorsx />
            <Autorotatex />
        </>
    );
};

export default HandHtml;
