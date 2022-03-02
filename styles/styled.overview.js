import styled from "styled-components";
import Image from "next/image";

export const Images = styled(Image)`
    border-radius: ${props => props.br || "0px"};
    @media (max-width: 768px) {
        align-items: flex-start;    
        padding: 0px 0px;
    }
`

export const MainSection = styled.main`
    padding: 50px 0px;
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        align-items: flex-start;    
        flex-direction: column;
        // height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0px 0px;
    }
`
export const Product = styled.section`
    display: flex;
    flex-direction: column;
`
export const DescProduct = styled.section`
    display: flex;
    flex-direction: column;
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
    }
`
export const Box = styled.section`
    display: flex;
    position: relative;
    flex-direction: ${props => props.fd || "column"};
    align-items: ${props => props.ai || "flex-start"};
    justify-content: ${props => props.jc || "flex-start"};
    margin: ${props => props.m || "0px"};
    padding: ${props => props.p || "0px"};
    `
export const BtnCart = styled.div`
    display: flex;
    background-color: ${props => props.bg || "transparent"};
    padding: 10px 20px;
    border-radius: 8px;
    width: ${props => props.w || "fit-content"};
    margin: ${props => props.m || " 0px"};
    align-items: center;
    justify-content: ${props => props.jc || "center"};
`

export const PreviewImage = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media (max-width: 768px) {
        display: none;
    }
`
export const Text = styled.p`
    font-size: ${props => props.sz || "16px"};
    font-weight: ${props => props.w || "400"};
    padding: ${props => props.p || "0px"};
    line-height: ${props => props.lh || "normal"};
    background-color: ${props => props.bg || "transparent"};
    color: ${props => props.c || "#000"};
    margin: ${props => props.m || "0px"};
    border-radius: 4px;
    text-decoration: ${props => props.td || "none"};
`

export const BtnLeft = styled.button`
    border: 0px;
    position: absolute;
    width: fit-content;
    left: 20px;
    z-index: 99;
    padding: 10px 12px;
    border-radius: 100px;
    background-color: #fff;   
    display: ${props => props.d || "none"};         
`
export const BtnRight = styled.button`
    position: absolute;
    border: 0px;
    right: 20px;
    z-index: 99;
    padding: 10px 12px;
    border-radius: 100px;
    width: fit-content;
    background-color: #fff;
    display: ${props => props.d || "none"} 
`