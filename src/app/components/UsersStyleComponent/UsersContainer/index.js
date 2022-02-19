import React from 'react'
import styled from 'styled-components'

const DivUserContainer = styled.div`
    display : flex;
    height : 100vh;
    width : 100vw;
    flex-direction : column;
`

const UserContainer = ({children}) => {
  return (
    <DivUserContainer>{children}</DivUserContainer>
  )
}

export default UserContainer;
