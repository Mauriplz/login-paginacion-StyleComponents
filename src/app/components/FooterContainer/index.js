import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    width: 100%;
    min-height: 90px;
    background-color: rgb(37, 40, 42);
    align-items: center;
    justify-content: center;
    color: rgb(224, 224, 224);
    margin-top: auto;
`

const PFooter = styled.p`
  font-size: 10px;
  @media only screen and (min-width:675px){
    font-size: 14px;
  }

`

const FooterContainer = () => {
  return (
    <Footer>
        <PFooter>Copyright 2022 - Desarrolador Front <b>Mauricio Plaza</b></PFooter>
        
    </Footer>
  )
}

export default FooterContainer;
