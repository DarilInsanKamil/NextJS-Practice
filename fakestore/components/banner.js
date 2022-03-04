import Image from "next/image";
import { useEffect, useState } from "react";
import { Holes } from "../styles/styled";


export default function Banner() {
    const [indexImg, setIndexImg] = useState(0);
    const [current, setCurrent] = useState(0);
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
            <button onClick={handlePrev}>{"<"}</button>
            <Image
                src={Data[indexImg]}
                alt="banner"
                width={1000}
                height={250}
            />
            <button onClick={handleNext}>{">"}</button>
            {
                Data.map((el, idx) => (
                    <div onClick={() => handleClick(idx)} key={idx}>
                        <Holes bg={indexImg === idx ? "red" : 'blue'}>{idx}</Holes>
                    </div>
                ))
            }
        </>
    )
}
