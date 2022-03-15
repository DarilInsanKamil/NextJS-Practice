import styled from "styled-components"
import Image from "next/image"
import useDeviceSize from "../../logic/width"
const Section3 = () => {
    const [width] = useDeviceSize()

    const Section = styled.section`
        padding: 68px 100px;
    `
    const Text = styled.p`
        font-size: ${props => props.sz};
        font-weight: ${props => props.w};
        color: ${props => props.c};
        width: ${props => props.width};
        margin: ${props => props.m};    
    `
    const SectionContent = styled.div`
        display: flex;
        justify-content: space-between;
    `
    const SectionButton = styled.section`
        display: flex;
        justify-content: space-between;
    `
    const Button = styled.button`
        border-radius: 8px;
        width: 251px;
        background-color: ${props => props.bg || "transparent"};
        border: ${props => props.b || "0px"};
        display: flex;
        padding: 13px 41px;
        align-items: center;
    `
    return (
        <Section>
            <Text c="orange" w="600">Pilihan konsumen</Text>
            <Text sz="32px" m="0px 0px 64px 0px" w="700">Residen Favorit</Text>
            <SectionContent>
                <figure>
                    <Image src="/images.png" width={525} height={550} alt="images" draggable="false" />
                </figure>
                <section>
                    <Text width="507px" sz="36px" w="700">Bangunan yang dirancang oleh Aristektur Handal</Text>
                    <Text width="570px" m="24px 0px 48px 0px" w="300" c="rgba(0,0,0, 0.55)">Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</Text>
                    <SectionButton>
                        <Button b="2px solid black">
                            <figure style={{ display: 'flex' }}>
                                <Image src="/telephone.png" width={24} height={24} draggable="false" alt="icon-telephone" />
                            </figure>
                            <Text w="700" m="0px 0px 0px 12px" sz="16px">Hubungi Kami</Text>
                        </Button>
                        <Button bg="#203239">
                            <Text w="700" c="white" sz="16px">Explore lebih banyak</Text>
                        </Button>
                    </SectionButton>
                </section>
            </SectionContent>
        </Section>
    )
}

export default Section3