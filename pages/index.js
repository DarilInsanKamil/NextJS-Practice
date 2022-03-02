import Head from "next/head"
import { Layout } from "../components/Layout";
import { useState } from "react";
import { allData } from '../data/db'
import { Product, MainSection, BtnLeft, BtnRight, Text, PreviewImage, Images, DescProduct, BtnCart, Box } from "../styles/styled.overview";
import useDeviceSize from "../logic/widthandheight";
//Async function for data
export async function getStaticProps() {
  const Data = await allData() 
  return {
    props: {
      Data
    }
  }
}

export default function Home({ Data }) {
  const [indexImg, setIndexImg] = useState(0)
  const [nextIndexImg, setNextIndexImg] = useState(1)
  const [quantity, setQuantity] = useState(0)
  const [width, height] = useDeviceSize();

  //Function for prev image slider
  const handlePrev = () => {
    const previndex = indexImg - 1
    const previndex1 = nextIndexImg - 1

    if (previndex < 0) {
      setIndexImg(Data.length - 1)
    } else {
      setIndexImg(previndex)
    }

    if (previndex1 < 0) {
      setNextIndexImg(Data.length - 1)
    } else {
      setNextIndexImg(previndex1)
    }
  }

  //Function for next image slider
  const handleNext = () => {
    setIndexImg((indexImg + 1) % Data.length)
    setNextIndexImg((indexImg + 1) % Data.length)
  }

  //Function for click image slider
  const handleClick = (idx) => {
    setIndexImg(idx)
  }

  //Function for quantity increment
  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  //Function for quantity decrement
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <>
      <Head>
        <title>Product details</title>
        <meta name="description" content="Product Detail Sneaker"></meta>
      </Head>
      <Layout>
        <MainSection>
          <Product>
            <Box fd="row" ai="center">
              <BtnLeft d={width < 768 ? "inline" : "none"} onClick={handlePrev}>
                <Images src="/iconprevious.svg" width={12} height={12} alt="arrow" />
              </BtnLeft>
              <Images
                src={Data[indexImg]}
                width={440}
                height={440}
                alt='product'
                draggable="false"
                br={width < 768 ? "0px" : "14px"} />
              <BtnRight d={width < 768 ? "inline" : "none"} onClick={handleNext}>
                <Images src="/iconnext.svg" width={12} height={12} alt="arrow" />
              </BtnRight>
            </Box>
            <PreviewImage>
              {
                Data.map((val, idx) => (
                  <Images
                    key={idx}
                    onClick={() => handleClick(idx)}
                    src={val}
                    width={80}
                    height={80}
                    alt={idx}
                    draggable="false"
                    br="8px" />
                ))
              }
            </PreviewImage>
          </Product>
          <DescProduct w="50%">
            <Text
              c="orange" w="600"
              sz={width < 768 ? "16px" : "20px"}
              m="0px 0px 10px 0px">
              Sneaker Company
            </Text>
            <Text
              lh="100%"
              w="bold"
              sz={width < 768 ? "28px" : "42px"}>
              Fall Limited Edition Sneakers
            </Text>
            <Text
              lh="150%" m="30px 0px"
              c="hsl(219, 9%, 45%)">
              These low-prfile sneakers are your perfect  casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer
            </Text>
            <Box
              fd={width < 768 ? "row" : "column"}
              ai={width < 768 ? "center" : "flex-start"}
              jc={width < 768 ? "space-between" : "flex-start"}
              m="10px 0px"
            >
              <Box
                m="0px 0px 10px 0px"
                fd="row">
                <Text sz="30px" w="700">$125.00</Text>
                <Text
                  bg="rgba(255, 125, 26, 0.1)"
                  m="0px 5px" w="bold"
                  c="orange" p="5px">
                  50%
                </Text>
              </Box>
              <Text
                c="hsl(219, 9%, 45%)"
                td="line-through">
                $250.00
              </Text>
            </Box>
            <Box
              fd={width < 768 ? "column" : "row"}
              ai="center"
              jc="space-between">
              <BtnCart
                fd="row"
                w={width < 768 ? "100%" : "35%"}
                jc="space-between"
                bg="rgba(255, 125, 26, 0.1)">
                <Images
                  onClick={decrement}
                  src='/iconminus.svg'
                  width={12}
                  height={4}
                  alt="minus" />
                <Text>{quantity}</Text>
                <Images
                  onClick={increment}
                  src="/iconplus.svg"
                  width={12}
                  height={12}
                  alt="plus" />
              </BtnCart>
              <BtnCart
                m={width < 768 ? "20px 0px 0px 0px" : "0px"}
                bg="#FFA500"
                w={width < 768 ? "100%" : "60%"}>
                <Images
                  src="/iconcart.svg"
                  width={16}
                  height={16}
                  alt="cart" />
                <Text m="0px 0px 0px 10px" c="#fff">Add to Cart</Text>
              </BtnCart>
            </Box>
          </DescProduct>
        </MainSection>
      </Layout>
    </>
  )
}
