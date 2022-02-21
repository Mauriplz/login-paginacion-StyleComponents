import styled from 'styled-components';

const UserListContainer = styled.div`
    margin-top: ${props=>props.expand ? '203px' : '' };
    display: flex;
    flex-direction: column;
    height: 100%;
`

export default UserListContainer;
