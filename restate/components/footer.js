import styled from "styled-components"
import Image from "next/image"

const Footer = () => {

    const Footers = styled.footer`
        background-color: #203239;
        padding: 31px 100px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const Text = styled.p`
        font-size: 32px;
    `
    const Icons = styled.div`
        width: 288px;
        display: flex;
        justify-content: space-between;
    `
    const Span = styled.span`
        font-style: italic;
        margin-right: 4px;
    `
    return (
        <Footers>
            <Text><Span>0</Span>mah</Text>
            <Icons>
                <figure>
                    <Image src="/facebook.png" width={24} height={24} alt="facebook" />
                </figure>
                <figure>
                    <Image src="/instagram.png" width={24} height={24} alt="instagram" />
                </figure>
                <figure>
                    <Image src="/linkedin.png" width={24} height={24} alt="linkedin" />
                </figure>
                <figure>
                    <Image src="/umblr.png" width={24} height={24} alt="umblr" />
                </figure>
            </Icons>
        </Footers>
    )
}

export default Footer