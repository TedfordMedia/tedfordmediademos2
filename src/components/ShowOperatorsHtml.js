
import React from 'react';
import styled from 'styled-components';
import ShowOperatorsDiv from './ShowOperatorsDiv';
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

const Operatorsx = () => {
    return (
        <SurroundDiv>
            <ShowOperatorsDiv />
        </SurroundDiv>
    );
};

export default Operatorsx;
