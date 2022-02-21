
import React from 'react';
import styled from 'styled-components';
import { ColumnGrid } from '../Responsive/ResponsiveStylesComponents';

const CardItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const UserImg = styled.img`
    border-radius: 50%;
    width: 128px;
    height: 128px;
`

const UserListItemCard = ({
    first_name,
    last_name,
    email,
    avatar
}) => {
  return (
    <ColumnGrid sm={6} md={4} lg={4}>
        <CardItemContainer>
            <h3>{first_name} {last_name}</h3>
            <UserImg src={avatar} />
            <p>{email}</p>
        </CardItemContainer>
        
    </ColumnGrid>
  )
}

export default UserListItemCard;
