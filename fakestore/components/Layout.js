import Footer from "./Footer"
import Header from "./Header"
import { Container, MainBox } from '../styles/styled'

export default function Layout({ children }) {
    return (
        <Container fd="column">
            <Header />
            <MainBox>{children}</MainBox>
            <Footer />
        </Container>
    )
}