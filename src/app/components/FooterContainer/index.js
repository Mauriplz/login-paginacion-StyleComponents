import React from 'react'
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

const FooterContainer = () => {
  return (
    <Footer>
        <p>@<b>Mauricio Plaza: </b> Desarrolador front</p>
    </Footer>
  )
}

export default FooterContainer;
