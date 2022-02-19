import styled from "styled-components";

const Form = styled.form`
    display : flex;
    flex-direction : column;
    padding: 30px;
    background-color: rgb(37, 40, 42);
    border-radius: 10px;
    border: 1px solid black;
    color : white;
    box-shadow: 0px 3px black;
`

const FormRH = ({children, ...props}) =>{
    return (
        <Form {...props}>{children}</Form>
    )
}

export default FormRH;