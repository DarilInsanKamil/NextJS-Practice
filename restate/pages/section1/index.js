import Image from "next/image"
import styled from "styled-components"
import useDeviceSize from "../../logic/width"
const Section1 = () => {
    const [width] = useDeviceSize()

    const Section = styled.section`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 100px;
    `
    const Text = styled.p`
        font-size: ${props => props.sz};
        font-weight: ${props => props.w};
        color: ${props => props.c};
        width: ${props => props.width};
        margin: ${props => props.m};
    `
    const SeacrhBar = styled.div`
        background-color: white;
        width: 675px;
        padding: 10px 14px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `
    const SectionSearch = styled.section`
        display: flex;
        align-items: center;
    `
    const Button = styled.button`
        border: 0;
        padding: 13px 41px;
        background-color: #203239;
        color: white;
        font-weight: 700;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0px 6px 8px rgba(32, 50, 57, 0.25);
    `
    const Input = styled.input`
        padding: 13px 5px;
        border: 0px;
        width: 400px;
        margin-left: 10px;
        font-size: 17px;
        &:focus {
            outline: none;
        }
    `
    const Journey = styled.div`
        display: flex;
        margin: 56px 0px 60px 0px;
        justify-content: space-between;
    `
    const SectionJourney = styled.section`
        width: 149px;
    `
    const Span = styled.span`
        color:#FF7527;
        font-size: ${props => props.sz || "48px"};

    `
    return (

        <Section>
            <section>
                <Text width="777px" sz="48px" w="600">Temukan Hunian Keluarga Sesuai Keinginanmu</Text>
                <Text width="544px" m="24px 0px 56px 0px" c="rgba(0,0,0, 0.4)" sz="16px" w="400">Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</Text>
                <SeacrhBar>
                    <SectionSearch>
                        <Image src="/location.png" width={24} height={24} alt="location" draggable="false" />
                        <Input type="text" placeholder="Search location, properties, residental group" />
                    </SectionSearch>
                    <Button>Search</Button>
                </SeacrhBar>
                <Journey>
                    <SectionJourney>
                        <Text sz="48px" w="600">200<Span>+</Span></Text>
                        <Text c="rgba(0,0,0, 0.4)" sz="16px" w="400">Residental grup telah bergabung</Text>
                    </SectionJourney>
                    <SectionJourney>
                        <Text sz="48px" w="600">10<Span sz="16px">tahun</Span></Text>
                        <Text c="rgba(0,0,0, 0.4)" sz="16px" w="400">Sudah berpengalaman</Text>
                    </SectionJourney>
                    <SectionJourney>
                        <Text sz="48px" w="600">999<Span>+</Span></Text>
                        <Text c="rgba(0,0,0, 0.4)" sz="16px" w="400">Properti tersedia di berbagai Kota</Text>
                    </SectionJourney>
                </Journey>
            </section>
            <Image src="/home.png" width={451} height={572} alt="home" draggable="false" />
        </Section>
    )
}

export default Section1