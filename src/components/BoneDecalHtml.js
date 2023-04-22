
import React from 'react';
import styled from 'styled-components';
import BoneDecalDiv from './BoneDecalDiv';
import '../styles.css';


const SurroundDiv = styled.div`
    right: 0;
    bottom:0;
    font-size: .8em;    
    line-height:.8;
    position: absolute;
    z-index: 10;
    float: right;
    padding-left: 8px;
    padding-right: 8px;
    justify-content: center;
    flex-direction: column;
    color: white;
`;

const BoneDecalx = () => {
    return (
        <SurroundDiv>
            <BoneDecalDiv />
        </SurroundDiv>
    );
};

export default BoneDecalx;
