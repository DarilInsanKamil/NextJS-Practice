import styled from "styled-components";
import Image from "next/image";
import useDeviceSize from "../../logic/width";
const Section5 = () => {
    const [width] = useDeviceSize()

    const Section = styled.section`
    padding: 68px 100px;
    display: flex;
    justify-content: space-between;
`
    const Text = styled.p`
    font-size: ${props => props.sz};
    font-weight: ${props => props.w};
    color: ${props => props.c};
    width: ${props => props.width};
    margin: ${props => props.m};
`
    const SectionContact = styled.div`
        display: flex;
        justify-content: space-between;
    `
    const SectionAward = styled.div`
        display: flex;
        align-items: center;
    `
    const Telephone = styled.div`
        display: flex;
        align-items: center;
    `
    const Email = styled.div`
        display: flex;
        align-items: center;
    `
    const Button = styled.button`
        margin: 20px 0px 0px 0px;
        border: 0px;
        background-color: ${props => props.bg || "transparent"};
        display: flex;
        justify-content: center;
        color: ${props => props.c || "white"};
        font-size: 17px;
        font-weight: 600px;
        padding: 13px;
        width: 100%;
        border-radius: 10px;
    `
    const Figure = styled.figure`
        margin: 0px 10px 0px 0px;
    `
    const SectionBox = styled.section`
        border: 1px solid orange;
        border-radius: 10px;
        margin: 0px 20px 0px 0px;
        padding: 24px;
    `
    return (
        <Section>
            <div>
                <Text w="700" sz="28px">Hubungi Kami</Text>
                <SectionContact>
                    <SectionBox>
                        <Telephone>
                            <Figure>
                                <Image src="/telephone.png" width={32} height={32} alt="icons-telephone" />
                            </Figure>
                            <div>
                                <figcaption>Call</figcaption>
                                <figcaption>+6281232936733</figcaption>
                            </div>
                        </Telephone>
                        <Button bg="rgba(255, 117, 39, 0.2)">
                            Call Now
                        </Button>
                    </SectionBox>
                    <SectionBox>
                        <Email>
                            <Figure>
                                <Image src="/email.png" width={32} height={32} alt="icons-email" />
                            </Figure>
                            <div>
                                <figcaption>email</figcaption>
                                <figcaption>omahindev@gmail.com</figcaption>
                            </div>
                        </Email>
                        <Button bg="orange">
                            Email Now
                        </Button>
                    </SectionBox>
                </SectionContact>
            </div>
            <div>
                <Text w="700" sz="28px">Penghargaan</Text>
                <SectionAward>
                    <figure>
                        <Image src="/award2.png" width={156} height={104} alt="award1" draggable="false" />
                    </figure>
                    <figure>
                        <Image src="/award1.png" width={211} height={152} alt="award1" draggable="false" />
                    </figure>
                </SectionAward>
            </div>
        </Section>
    )
}
export default Section5