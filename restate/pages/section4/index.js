import styled from "styled-components";
import Image from "next/image";
import useDeviceSize from "../../logic/width";
const Section4 = () => {
    const [width] = useDeviceSize()
    const Section = styled.section`
        padding: 68px 100px;
        background-color: white;
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
    const Caption = styled.figcaption`
        font-size: ${props => props.sz};
        font-weight: ${props => props.w};
        color: ${props => props.c};
        width: ${props => props.width};
        margin: ${props => props.m};
    `
    return (

        <Section>
            <Text c="orange" w="600">Pilihan Auditor</Text>
            <Text sz="32px" m="0px 0px 64px 0px" w="700">Residen Berbagai Kota</Text>
            <SectionContent>
                <figure>
                    <Image src="/image1.png" width={357} height={454} draggable="false" alt="image1" />
                    <Caption width="357px" w="600" sz="20px">
                        Magnolia Surabaya
                    </Caption>
                    <Caption width="357px" c="rgba(0,0,0, 0.55)">
                        Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136
                    </Caption>
                </figure>
                <figure>
                    <Image src="/image2.png" width={357} height={454} draggable="false" alt="image2" />
                    <Caption width="357px" w="600" sz="20px">
                        Pinang Residence
                    </Caption>
                    <Caption width="357px" c="rgba(0,0,0, 0.55)">
                        Jl. Deplu Raya No.16 RT.5, RW.003
                        Bintaro, Pesanggrahan, Jakarta Selatan 12330
                    </Caption>
                </figure>
                <figure>
                    <Image src="/image3.png" width={357} height={454} draggable="false" alt="image3" />
                    <Caption width="357px" w="600" sz="20px">
                        South Grove
                    </Caption>
                    <Caption width="357px" c="rgba(0,0,0, 0.55)">
                        1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440
                    </Caption>
                </figure>
            </SectionContent>
        </Section>
    )
}

export default Section4