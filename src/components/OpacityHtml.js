import React from 'react';
import styled from 'styled-components';
import MySliders from './MySliders';

import '../styles.css';

const SurroundDiv = styled.div`
    width: 20%;
    right: 0;
    top:0;
    font-size: 1.0em;    
    line-height: 1.0;
    position: absolute;
    z-index: 10;
    float: right;
    padding-left: 8px;
    padding-right: 8px;
    justify-content: center;
    flex-direction: column;
`;

const OpacityHtml = (props) => {
    return (
        <SurroundDiv>
            <MySliders {...props} />
        </SurroundDiv>
    );
};

export default OpacityHtml;
