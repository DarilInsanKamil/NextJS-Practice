import Footer from "./footer"
import Header from "./header"
import styled from "styled-components"

const Layout = ({ children }) => {
    const Layouts = styled.div`
        background-color: #EEEDDE;
    `
    return (
        <Layouts>
            <Header />
            <main>{children}</main>
            <Footer />
        </Layouts>
    )
}

export default Layout