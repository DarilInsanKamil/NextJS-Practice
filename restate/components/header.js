import styled from "styled-components"
import Image from "next/image"
const Header = () => {
    const Headers = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 50px 100px;
        // background-color: #EEEDDE;
        position: sticky;
        @media(max-width: 768px) {
            padding: 10px;
        }
    `
    const Ul = styled.ul`
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        @media(max-width: 768px) {
            display: none;
        }
    `
    const Figure = styled.figure`
        display: none;
        @media(max-width: 768px) {
            display: inline;
        }
    `
    const Nav = styled.nav`
        width: 570px;
    `
    const Line = styled.div`
        width: 20px;
        height: 3px;
        background-color: transparent;
        border-radius: 20px;
    `
    const Li = styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        &:hover {
            ${Line} {
                background-color: #F6762E;
            }
            font-weight: 600;
        }
    `
    const Span = styled.li`
        display: flex;
    `
    return (
        <Headers>
            <h1>0home</h1>
            <Nav>
                <Ul>
                    <Li>Home <Line></Line></Li>
                    <Li>About <Line></Line></Li>
                    <Span>
                        <Li>Properties <Line></Line></Li>
                        <Image src="/arrow.png" width={24} height={20} alt="dropdown" />
                    </Span>
                    <Li>Contact <Line></Line></Li>
                </Ul>
            </Nav>
            <Figure>
                <Image src='/menu.svg' width={42} height={42} alt="menu" />
            </Figure>
        </Headers>
    )
}

export default Header