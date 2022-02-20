import styled from "styled-components";

const handleFlexDirection = (props)=>{
    switch(props){
        case 'row':
            return 'row'
        default:
            return 'column'
    }
}

export const Row = styled.div`
    display : flex;
    width : 100%;
    flex-wrap: wrap;
    flex-direction: ${({flexDirection})=>handleFlexDirection(flexDirection) };
    justify-content: ${props => (props.justify ? props.justify : 'space-around')};
    align-items: center;
    @media only screen and ( min-width:667px ) {
        flex-direction: row;
    }
`

export const Column = styled.div`
    float:left;
    width : 100%;

    @media only screen and ( min-width:667px ) {
        width : ${props => (props.span ? props.span / 12 * 100 : "8.33")}%;
    }
`

const getWidthString = (span) => {
    if (!span) {
        return
    }

    let width = span / 12 * 100;
    return `width : ${width}%;`
}

export const ColumnGrid = styled.div`
    float:left;

    ${({ xs }) => (xs) ? getWidthString(xs) : "width : 100%"};

    @media only screen and ( min-width:667px) {
       ${({ sm }) => (sm) && getWidthString(sm)};
    }

    @media only screen and ( min-width:992px ) {
        ${({ md }) => (md) && getWidthString(md)};
    }
    @media only screen and ( min-width:1200px ) {
        ${({ lg }) => (lg) && getWidthString(lg)};
    }
`