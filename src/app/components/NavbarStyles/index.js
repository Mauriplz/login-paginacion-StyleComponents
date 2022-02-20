import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonDanger from '../Buttons/ButonDanger';

/*rgb(37, 40, 42);#E0E0E0 */

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: rgb(37, 40, 42);
    display:flex;
    flex-direction: column;
`
export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 8%;
    @media only screen and (min-width:700px){
        padding-left: 9%;
    }
`

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 8%;
    @media only screen and (min-width:700px){
        padding-left: 9%;
    }
`

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    padding-bottom : ${(props)=>props.extend? '10px':''};
`
export const NavbarLinkContainer = styled.div`
    display: flex;
    align-items: center;
`

export const NavbarLinkContainerExpand = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #E0E0E0;
padding-bottom: 18px;
`

export const NavbarLink = styled(Link)`
    color: white;
    font-size: 18px;
    text-decoration: none;
    margin: 10px;
    font-weight: bold;
    @media only screen and (max-width: 700px){
        display: none;
    }
`
export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
`

export const LogoLiga = styled.img`
    margin: 13px 10px 0px 10px;
    width: 176px;
    height: 91px;
    @media only screen and (min-width: 700px){
        margin: 13px 10px 10px 10px;
        max-width: 100px;
        height: 60px;
    }
`

export const LogoLigaExpanded = styled.img`
    width: 71px;
    height: 57px;
    margin-top: ${(props)=>(props.styleExpand ? "13px":"0")};
    @media only screen and (min-width: 701px){
        display: none;
    }
`

export const PUser = styled.p`
    color: white;
    font-size: 14px;
    @media only screen and (max-width: 700px){
        display: none;
        font-size: 15px;
    }
    @media only screen and (min-width: 776px){
        font-size: 16px;
    }
`

export const PUserExtended = styled.p`
    color:  rgb(37, 40, 42);
    font-size: 15px;
    margin: 0;
    margin-bottom: 5px;
    @media only screen and (max-width:320px){
        font-size: 13px;
    }
`

export const ButtonTogle = styled.button`
    width: 70px;
    height: 55px;
    background-color: rgb(37, 40, 42);
    border:  1px solid #E0E0E0;
    border-radius: 4px;
    color: white;
    font-size: 45px;
    cursor: pointer;
    margin-top: ${(props)=>(props.styleExpand ? "13px":"0")};
    transition: background-color .3s ease;
    @media only screen and (min-width:701px){
        display: none;
    }
    &:hover{
        background-color: #E0E0E0;
        color: rgb(37, 40, 42);
    }   
`

export const ButtonDangerNavbar = styled(ButtonDanger)`
    @media only screen and (max-width: 700px){
        display: none;
    }
`

export const NavbarExtenderContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 700px){
        display: none;
    }
`