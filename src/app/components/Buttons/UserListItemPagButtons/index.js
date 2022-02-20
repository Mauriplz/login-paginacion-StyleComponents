import React from 'react'
import styled from 'styled-components'

/*rgb(37, 40, 42);#E0E0E0 */

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
    margin: 5px 4px;
    background-color: ${props=>props.page===props.number ? '#E0E0E0' : 'rgb(37, 40, 42)'};
    color: ${props=>props.page===props.number ? 'rgb(37, 40, 42)' : '#E0E0E0'};
    border: ${props=>props.page===props.number ? ' 1px solid rgb(37, 40, 42)' : '#E0E0E0'};
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

// rgb(37, 40, 42)

const SpanNumber = styled.div`
    font-weight: bold;
`

const UserListItemPagButtons = ({
    number,
    page,
    ...rest
}) => {
  return (
    <ItemPagButtonsContainer number={number} page={page} {...rest}>
        <SpanNumber>{number}</SpanNumber>
    </ItemPagButtonsContainer>
  )
}

export default UserListItemPagButtons
