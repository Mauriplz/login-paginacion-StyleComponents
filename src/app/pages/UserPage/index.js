import React from 'react'
import UserContainer from '../../components/UsersStyleComponent/UsersContainer'
import Navbar from '../../containers/Navbar'
import UserList from '../../containers/UserList'
import UserUrlList from '../../containers/UserUrlList'


const UserPage = () => {
    
    return (
        <UserContainer>
            <Navbar />
            <UserList/>
            {/* <UserUrlList /> */}
        </UserContainer>

    )
}

export default UserPage
