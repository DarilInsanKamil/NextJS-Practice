import Image from 'next/image'
import useDeviceSize from '../../logic/widthandheight'
import { Nav, Ul, Profile, Li, SubNav, Menu, Box } from './styled.header';
import Link from 'next/link';
export const Header = () => {
  const [width, height] = useDeviceSize();
  return (
    <header>
      <Nav>
        <SubNav>
          <Box d={width < 768 ? "inline" : "none"}>
            <Image
              src='/iconmenu.svg'
              width={20}
              height={20}
              alt="Menu"
              draggable="false"
            />
          </Box>
          <h2>Sneakers</h2>
          <Ul>
            <Li>Collection</Li>
            <Li>Man</Li>
            <Li>Woman</Li>
            <Li>About</Li>
            <Li>Contact</Li>
          </Ul>
        </SubNav>
        <Profile>
          <Image src='/iconcart.svg' width={24} height={24} draggable="false" alt='cart'/>
          <Image src='/imageavatar.png' width={36} height={36} draggable="false" alt='profile-image'/>
        </Profile>
      </Nav>
    </header>
  )
}
