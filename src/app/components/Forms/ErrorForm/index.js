import React from 'react';
import styled from 'styled-components';

const SpanError = styled.span`
    color : red;
    font-size : 14px;
    @media only screen and ( min-width:450px) {
        font-size : 18px;
     }
`

const ErrorForm = ({children}) => {
  return (
    <SpanError>{children}</SpanError>
  )
}

export default ErrorForm;