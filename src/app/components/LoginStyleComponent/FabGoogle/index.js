import React from 'react'
import styled from 'styled-components'

const SocialNetworks = styled.div`
    width: 100%;
`;

const GoogleIcon = styled.img`
    position: absolute;
    margin-top: 15px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
`;

const BtnText = styled.div`
    text-align:center;
    color: white;
    font-size: 11px;
    letter-spacing: 0.2px;
    padding : 13px;
    font-size: 18px;
`;

const IconWrapper = styled.div`
    position: absolute;
    width: 40px;
    height: 47px;
    border-radius: 5px 0px 0px 5px;
    background-color: white;
`;

const GoogleBtn = styled.div`
    cursor: pointer;
    margin-top: 15px;
    width: 100%;
    height: 47px;
    background-color: #007bff;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    font-size:10px;
    border-radius: 5px;
    transition: box-shadow .3s ease;
    &:hover {
        box-shadow: 0 0 6px #4285f4;
    }
    &:active {
        background: #1669f2;
    }
`;

const SpanRegister = styled.span`
    font-size: 13px;
    padding-left: 25px;
    @media only screen and (min-width:300px){
        padding-left: 0px;
        font-size: 16px
    }
`

const FabGoogle = ({...props}) => {
    return (
        <SocialNetworks {...props}>
            <GoogleBtn>
                <IconWrapper>
                    <GoogleIcon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </IconWrapper>
                <BtnText>
                    <SpanRegister>Registrate con Google</SpanRegister>
                </BtnText>
            </GoogleBtn>
        </SocialNetworks>

    )
}

export default FabGoogle