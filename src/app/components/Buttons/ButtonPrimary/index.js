import styled from 'styled-components';

const ButtonPrimary = styled.button`
    margin-top: 10px;
    background-color: ${(props) => props.primary ? 'rgb(37,40,42);' : 'transparent'};
    border : 1px solid white;
    color: white;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 10px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:focus{
        outline: none;
    }
    &:disabled{
        background-color: #E0E0E0;
    }
    &:hover{
        background-color: #E0E0E0;
        border : 1px solid white;
        color : rgb(37, 40, 42);
    }

`
export default ButtonPrimary