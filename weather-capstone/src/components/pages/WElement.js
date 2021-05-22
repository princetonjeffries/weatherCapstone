import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.4rem;
    &.active{
        color: orange;
    }
    `;

export const Div = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #0C0E20;
    
    `;

/* This is for Monthly Weather */
export const MainDiv = styled.div`
    margin: 15px;
    background-color: rgba(0, 0, 0, .3);
    `;
 
export const Miv = styled.div`
    display: flex;
    justify-content: space-between;
    `;
 
export const MP = styled.div`
    font-size: 3rem; 
    color: white;
    `;
 
export const Dates = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    `;

export const DateP = styled.div`
    color: white;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    `;

export const HighTemp = styled.div`
    font-size: 3rem;
    `;

export const TheDates = styled.div`
    align-content: center;
    font-size: 1.3rem;
    `;

export const PDiv = styled.div`
    display: flex;
    justify-content: center;
    `;    

export const Para = styled.div`
    font-size: 3rem;
    color: white;
    `;