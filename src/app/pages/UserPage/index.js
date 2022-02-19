import React from 'react'
import UserContainer from '../../components/UsersStyleComponent/UsersContainer'
import Navbar from '../../containers/Navbar'
import UserList from '../../containers/UserList'



const UserPage = () => {
    
    return (
        <UserContainer>
            <Navbar />
            <UserList/>
        </UserContainer>

    )
}

export default UserPage
