import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { ButtonDangerNavbar, 
    ButtonTogle, 
    LeftContainer, 
    LogoLiga, 
    LogoLigaExpanded, 
    NavbarContainer, 
    NavbarExtenderContainer, 
    NavbarInnerContainer, 
    NavbarLink, 
    NavbarLinkContainer, 
    NavbarLinkContainerExpand,
    NavbarLinkExtended, 
    PUser, 
    PUserExtended, 
    RightContainer 
} from '../../components/NavbarStyles';
import ButtonDanger from '../../components/Buttons/ButonDanger';


import LogoImg from '../../../assets/logo-liga.jpg';
import LogoImgExpand from '../../../assets/lg.png';
import LogoImg1 from '../../../assets/logo-1.png'
const Navbar = () => {

    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)

    const [extend, setExtend] = useState(false)

    const handleExtend = () => {
        setExtend(!extend)
    }
    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <NavbarContainer>
            <NavbarInnerContainer extend={extend}>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/user">
                            <LogoLiga src={LogoImg}></LogoLiga>
                        </NavbarLink>
                        <PUser>User - {token}</PUser>
                    </NavbarLinkContainer>
                    <ButtonTogle styleExpand={extend} onClick={handleExtend}>
                        <i className={extend ? 'fas fa-xmark' : 'fas fa-futbol'}></i>

                    </ButtonTogle>
                </LeftContainer>
                <RightContainer>
                    <ButtonDangerNavbar onClick={handleLogout} danger visible={true} fontSize={16}><i
                        className='fas fa-arrow-right-from-bracket'></i>{' '}
                        Logout
                    </ButtonDangerNavbar>
                    <LogoLigaExpanded styleExpand={extend} src={LogoImgExpand}></LogoLigaExpanded>
                </RightContainer>
            </NavbarInnerContainer>
            {(extend) && (
                <NavbarExtenderContainer>
                    <NavbarLinkContainerExpand>
                        <NavbarLinkExtended to="/user">
                            <LogoLiga src={LogoImg1}></LogoLiga>
                        </NavbarLinkExtended>
                        <PUserExtended>User - {token}</PUserExtended>
                        <ButtonDanger visible onClick={handleLogout} danger fontSize={16}><i
                            className='fas fa-arrow-right-from-bracket'></i>{' '}
                            Logout
                        </ButtonDanger>
                    </NavbarLinkContainerExpand>
                </NavbarExtenderContainer>)}
        </NavbarContainer>
    )
}

export default Navbar;