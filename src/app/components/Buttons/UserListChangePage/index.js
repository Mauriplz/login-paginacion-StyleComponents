import React from 'react';
import styled from 'styled-components';
import { ItemPagButtonsContainer } from '../UserListItemPagButtons';

const ChangePageButton = styled(ItemPagButtonsContainer)`
    color: rgb(37, 40, 42);
`
const UserListChangePage = ({children, ...props}) => {
  return (
    <ChangePageButton {...props}>
        {children}
    </ChangePageButton>
  )
}

export default UserListChangePage;
