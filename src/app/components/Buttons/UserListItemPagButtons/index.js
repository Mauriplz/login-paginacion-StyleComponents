import React from 'react';
import styled from 'styled-components';

//si el page y el number recibidos es igual elemento activo
export const ItemPagButtonsContainer = styled.div`
    font-size: 13px;
    height: 17px;
    width: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px 8px;
    border-radius: 6px;
    margin: 2px 4px;
    background-color: ${props=>props.page===props.number ? 'rgb(37, 40, 42)' : '#E0E0E0'};
    color: ${props=>props.page===props.number ? '#E0E0E0' : 'rgb(37, 40, 42)'};
    border: ${props=>props.page===props.number ? ' 1px solid #E0E0E0' : 'rgb(37, 40, 42)'};
    &:hover{
        cursor: pointer;
    }
    @media only screen and (min-width:700px){
        font-size: 15px;
        height: 17px;
        width: 8px;
        padding: 8px 12px;
        border-radius: 6px;
        margin: 5px 4px;
    }
    
`

const SpanNumber = styled.div`
    font-weight: bold;
`

const UserListItemPagButtons = ({
    number,
    page,
    ...rest
}) => {
  return (
        <ItemPagButtonsContainer {...rest} number={number} page={page} >
            <SpanNumber>{number}</SpanNumber>
        </ItemPagButtonsContainer>
  )
}

export default UserListItemPagButtons
