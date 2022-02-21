import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Oval} from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
        <Oval color="#0EAD69" height={80} width={80} />
    </SpinnerContainer>
  )
}

export default Spinner;
