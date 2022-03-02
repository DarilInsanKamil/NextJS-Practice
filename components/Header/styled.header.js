import styled from "styled-components";
import Image from "next/image";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 0.5px solid hsl(25, 100%, 94%);
    font-size: 16px;
    @media screen and (max-width: 768px) {
        margin: 0px;
        width: 100%;
    }
`
export const Box = styled.div`
    display: ${props => props.d || "none"};
    margin: 0px 10px 0px 0px
`
export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const Li = styled.li`
    margin: 0px 0px 0px 40px;
    color:  hsl(219, 9%, 45%);
    cursor: pointer;
`
export const SubNav = styled.div`
    display: flex;
    align-items: center;
`
export const Profile = styled.figure`
    display: flex;
    width: 80px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`