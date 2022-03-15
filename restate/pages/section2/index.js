import styled from "styled-components"
import Image from "next/image"
import useDeviceSize from "../../logic/width"

const Section2 = () => {
    const [width] = useDeviceSize()
    const Section = styled.section`
        padding: 100px;
        background-color: white;
    `
    const Text = styled.p`
        font-size: ${props => props.sz};
        font-weight: ${props => props.w};
        color: ${props => props.c};
        width: ${props => props.width};
        margin: ${props => props.m};
    `
    const Process = styled.div`
        margin: 64px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
    `
    const SectionProcess = styled.section`
        width: 300px;
        padding: 20px 10px 20px 0px;
        border: 0.5px solid transparent;
        &:hover {
            border: 0.5px solid rgba(0,0,0, 0.3);
            border-radius: 10px;
        }
    `
    const Line = styled.div`
        width: 5px;
        border-radius: 20px;
        height: 25px;
        background-color: orange;
    `
    const SectionText = styled.section`
        display: flex;
        justify-content: space-between;
    `
    const LearnMore = styled.button`
        margin: 48px 33px 20px 33px;
        display: flex;
        align-items: center;
        color: black;
        border: 0;
        background-color: transparent;
        padding: 4px 6px;
        cursor: pointer;
    `
    const Figure = styled.figure`
        display: flex;
        margin: 0px 0px 0px 8px;
    `
    return (
        <Section>
            <Text width="533px" m="0px 0px 8px 0px" sz="28px" w="600">Tahapan Pembelian Properti yang Mudah dan Cepat</Text>
            <Process>
                <SectionProcess>
                    <SectionText>
                        <div style={{ display: 'flex' }}>
                            <Line></Line>
                            <Text w="600" m="0px 0px 8px 30px">
                                Pilih Properti
                            </Text>
                        </div>
                        <Text w="600" m="0px 0px 8px 0px" c="orange">
                            01
                        </Text>
                    </SectionText>
                    <Text m="0px 33px" w="300" c="rgba(32, 50, 57, 0.55)">
                        Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini
                    </Text>
                    <LearnMore>
                        <Text w="500" sz="16px">Baca lebih Lanjut</Text>
                        <Figure>
                            <Image src="/arrowright.png" width={24} height={24} alt="arrowright" />
                        </Figure>
                    </LearnMore>
                </SectionProcess>
                <SectionProcess>
                    <SectionText>
                        <div style={{ display: 'flex' }}>
                            <Line></Line>
                            <Text w="600" m="0px 0px 8px 30px">
                                Proses Booking
                            </Text>
                        </div>
                        <Text w="600" m="0px 0px 8px 0px" c="orange">
                            02
                        </Text>
                    </SectionText>
                    <Text m="0px 33px" w="300" c="rgba(32, 50, 57, 0.55)">
                        Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini
                    </Text>
                    <LearnMore>
                        <Text w="500" sz="16px">Baca lebih Lanjut</Text>
                        <Figure>
                            <Image src="/arrowright.png" width={24} height={24} alt="arrowright" />
                        </Figure>
                    </LearnMore>
                </SectionProcess>
                <SectionProcess>
                    <SectionText>
                        <div style={{ display: 'flex' }}>
                            <Line></Line>
                            <Text w="600" m="0px 0px 8px 30px">
                                KPR dan sertifikasi
                            </Text>
                        </div>
                        <Text w="600" m="0px 0px 8px 0px" c="orange">
                            03
                        </Text>
                    </SectionText>
                    <Text m="0px 33px" w="300" c="rgba(32, 50, 57, 0.55)">
                        Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini
                    </Text>
                    <LearnMore>
                        <Text w="500" sz="16px">Baca lebih Lanjut</Text>
                        <Figure>
                            <Image src="/arrowright.png" width={24} height={24} alt="arrowright" />
                        </Figure>
                    </LearnMore>
                </SectionProcess>
            </Process>
        </Section>
    )
}

export default Section2