import React from 'react';
import styled from 'styled-components';
import { ItemPagButtonsContainer } from '../UserListItemPagButtons';

const ChangePageButton = styled(ItemPagButtonsContainer)`
    color: rgb(37, 40, 42);
    background-color: #E0E0E0;
`
const UserListChangePage = ({children, ...props}) => {
  return (
    <ChangePageButton {...props}>
        {children}
    </ChangePageButton>
  )
}

export default UserListChangePage;
