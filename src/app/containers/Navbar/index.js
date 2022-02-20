import React from 'react';
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
import { expandToogle } from '../../actions/ui';
const Navbar = () => {

    const dispatch = useDispatch()
    const {expand} =  useSelector(state=>state.ui)
    const { token } = useSelector(state => state.auth)

    const handleExtend = () => {
        dispatch(expandToogle(!expand))
    }
    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <NavbarContainer>
            <NavbarInnerContainer extend={expand}>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/user">
                            <LogoLiga src={LogoImg}></LogoLiga>
                        </NavbarLink>
                        <PUser>Usuario - {token}</PUser>
                    </NavbarLinkContainer>
                    <ButtonTogle styleExpand={expand} onClick={handleExtend}>
                        <i className={expand ? 'fas fa-xmark' : 'fas fa-futbol'}></i>

                    </ButtonTogle>
                </LeftContainer>
                <RightContainer>
                    <ButtonDangerNavbar onClick={handleLogout} danger visible={true} fontSize={16}><i
                        className='fas fa-arrow-right-from-bracket'></i>{' '}
                        <span>Cerrar Sesión</span>
                    </ButtonDangerNavbar>
                    <LogoLigaExpanded styleExpand={expand} src={LogoImgExpand}></LogoLigaExpanded>
                </RightContainer>
            </NavbarInnerContainer>
            {(expand) && (
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