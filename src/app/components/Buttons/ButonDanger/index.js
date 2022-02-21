import styled from 'styled-components';

const ButtonDanger = styled.button`
    margin-top: 10px;
    background-color: ${(props) => props.danger ? '#B61515;' : 'transparent'};
    border : 1px solid #B61515;
    color: white;
    cursor: pointer;
    font-size: ${(props)=>props.fontSize ? `${props.fontSize}px` : '18px'};
    padding: 12px 10px;
    border-radius: 5px;
    transition: background-color .3s ease;
    display: ${(props)=>props.visible ? 'block' : 'none'};
    

    &:focus{
        outline: none;
    }
    &:disabled{
        
    }
    &:hover{
        background-color: #760C0C;
        border : 1px solid #760C0C;
        color : white;
    }

`
export default ButtonDanger