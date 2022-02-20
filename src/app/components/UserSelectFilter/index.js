import React from 'react'
import styled from 'styled-components'

const SelectUser = styled.select`
    color: rgb(37, 40, 42);
    border: 0px;
    font-size: 16px;
    height: 24px;
    padding: 3px;
    border-radius: 3px;
    font-weight: bold;
`
const DivSelectContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`

const SpanSelectContainer = styled.span`
    margin-right: 5px;
`

const UserSelectFilter = ({...props}) => {
  return (
    <DivSelectContainer>
        <SpanSelectContainer>Elementos por pagina:</SpanSelectContainer>
        <SelectUser {...props}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={6}>6</option>
    </SelectUser>
    </DivSelectContainer>
    
  )
}

export default UserSelectFilter;