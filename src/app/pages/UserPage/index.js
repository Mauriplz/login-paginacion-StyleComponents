import React from 'react';

//COMPONENTS
import UserContainer from '../../components/UsersStyleComponent/UsersContainer';
import Navbar from '../../containers/Navbar';
import UserList from '../../containers/UserList';
//UserUrlList es una alternativa de paginacion por URL podeis probarlo tambien comentando UserList.
import UserUrlList from '../../containers/UserUrlList';

const UserPage = () => {
    
    return (
        <>
            <UserContainer>
            <Navbar />
            <UserList/>
            {/* <UserUrlList /> */}
            </UserContainer>
        </>
    )
}

export default UserPage
