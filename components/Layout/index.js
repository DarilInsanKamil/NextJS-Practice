import { Footer } from "../Footer"
import { Header } from "../Header"
import { Container } from "./styled.layout"
export const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <div>{children}</div>
            <Footer />
        </Container>
    )
}
