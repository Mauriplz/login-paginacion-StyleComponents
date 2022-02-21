import styled from "styled-components";

const HrDiv = styled.div`
    display: none;
    @media only screen and (min-width:675px){
        display: block;
    }
`

const HrUserList = () =>{
    return(
        <HrDiv>
            <hr></hr>
        </HrDiv>
    )
}

export default HrUserList;
