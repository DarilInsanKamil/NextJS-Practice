import styled from "styled-components";

export const Headers = styled.header`
    display: flex;
    width: 90%;
    margin: 0 auto;
`
export const SectionBox = styled.section`
    width:${props => props.w};
    display: flex;
`
export const Container = styled.div`
    width:${props => props.w};
    display: flex;
    flex-direction: ${props => props.fd};
    margin:0 auto;
    position: relative;
    height: 100vh;
    @media(max-width: 768px){
        width: 100%;
    };
`
export const MainBox = styled.main`
    width: 90%;
    margin: 0 auto;
`
export const FooterBox = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    color: #fff;
    list-style-type: none;
`
export const Footers = styled.footer`
    display: flex;
    justify-content: space-evenly;
    font-size: 16px;
    bottom: 0px;
    position: absolute;
    width: 100%;
    margin-top: 10px;
    background-color: #1B8057;
    padding: ${props => props.p};
`
//Banner
export const Hole = styled.section`
    color: transparent;
    padding: 5px;
    background-color: ${props => props.bg};
    width: 10px;
    border: ${props => props.b};
    border-radius: 100px;
    margin: 10px;
    height: 5px;
`
export const BtnLeft = styled.li`
    border: 0px;
    position: absolute;
    width: fit-content;
    left: 20px;
    z-index: 99;
    padding: 10px 12px;
    // border-radius: 100px;
    // background-color: #fff;   
    display: ${props => props.d || "flex"};   
    align-items: center;
    justify-content: center;      
`
export const BtnRight = styled.button`
    position: absolute;
    border: 0px;
    right: 20px;
    z-index: 99;
    padding: 10px 12px;

    align-items: center;
    justify-content: center;
`