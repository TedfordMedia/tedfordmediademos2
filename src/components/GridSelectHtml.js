
import React from 'react';
import styled from 'styled-components';
import GridSelectDiv from './GridSelectDiv';
import '../styles.css';

const SurroundDiv = styled.div`
    left: 0;
    bottom:0;
    font-size: .8em;    
    line-height:.8;
    position: absolute;
    z-index: 10;
    float: left;
    padding-left: 0px;
    padding-right: 8px;
    justify-content: center;
    flex-direction: column;
    color: white;
`;

const Gridselect = () => {
    return (
        <SurroundDiv>
            <GridSelectDiv />
        </SurroundDiv>
    );
};

export default Gridselect;
