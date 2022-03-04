import Image from "next/image";
import { useEffect, useState } from "react";
import { BtnLeft, BtnRight, Hole } from "../styles/styled";


export default function Banner() {
    const [indexImg, setIndexImg] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    const Data = [
        '/banner1.jpg',
        '/banner2.jpg',
        '/banner3.jpg'
    ]

    useEffect(() => {
        const next = (indexImg + 1) % Data.length
        const id = setTimeout(() => setIndexImg(next), 5000)
        return () => clearTimeout(id)
    }, [indexImg])

    const handlePrev = () => {
        const prevIndex = indexImg - 1
        const prevIndex1 = nextIndex - 1

        if (prevIndex < 0) {
            setIndexImg(Data.length - 1)
        } else {
            setIndexImg(prevIndex)
        }

        if (prevIndex1 < 0) {
            setNextIndex(Data.length - 1)
        } else {
            setNextIndex(prevIndex)
        }
    }

    const handleNext = () => {
        setIndexImg((indexImg + 1) % Data.length)
        setNextIndex((nextIndex + 1) % Data.length)
    }
    const handleClick = (idx) => {
        setIndexImg(idx)
    }
    return (
        <>
            <div style={{position: 'relative', width: 'fit-content', alignItems: 'center', display: 'flex', margin: '0 auto'}}>
                <BtnLeft onClick={handlePrev}>{"<"}</BtnLeft>
                <Image
                    src={Data[indexImg]}
                    alt="banner"
                    width={1200}
                    height={250}
                    draggable="false"
                />
                <BtnRight onClick={handleNext}>{">"}</BtnRight>
            </div>
            {
                Data.map((el, idx) => (
                    <ul onClick={() => handleClick(idx)} key={idx}>
                        <Hole
                            bg={indexImg === idx ? "red" : "transparent"}
                            b={indexImg === idx ? "2px solid red" : "1px solid black"}>
                        </Hole>
                    </ul>
                ))
            }
        </>
    )
}
