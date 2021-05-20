import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.4rem;
    &.active{
        color: #a36106;
    }
    `;

export const Div = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #0C0E20;
    
    `;