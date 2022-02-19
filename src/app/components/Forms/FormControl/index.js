import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding: 0.5em;
    color : rgb(37, 40, 42);
    border: none;
    border-radius: 3px;
    width: 96%;
    font-size: 16px;
    margin-bottom: 10px;
    height: 30px;

    &:focus{
        outline: none;
        border: ${({error})=>(error) ? '2px solid  red' : '3px solid  #109517'};
    }
`
const Label = styled.label`
    margin-bottom: 0.5em;
    color: white;
    display: block;
`
const DivFormControl = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 5px;
`

const FormControl = forwardRef(({
    label,
    type,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    error,
    disabled,
    ...rest
},ref) => {
    return (
        <DivFormControl>
            <Label htmlFor={`${label}-id`}>{label}</Label>
            <Input {...rest}
                id={`${label}-id`}
                type={type}
                name={name}
                value={value}
                placeholder={label}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
                error={error}
                disabled={disabled}
                ref={ref}
            />
        </DivFormControl>

    )
})

export default FormControl