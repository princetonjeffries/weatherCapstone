import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 10rem;
    z-index:10;
    `;
    
    export const NavLink = styled(Link)`
    color: #fff;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size:1.2rem;
    cursor: pointer;
    &.active{
        color: #a36106;
    }
    `;
    
export const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: 24px;

    
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

   
`;

export const NavBtnLink = styled(Link)`
    border-radius:4px;
    background:#258cel;
    padding:10px 22px;
    color: #fff;
    border:none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    }
`;