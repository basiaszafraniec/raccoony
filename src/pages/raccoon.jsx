import { useEffect, useState } from "react";
import "../styles/raccoon.css"

export default function Raccoon() {
    const [happiness, setHappiness] = useState(5);
    const [imgSrc, setImgSrc] = useState("raccoon-guitar.jpeg");
    function feedRaccoon() {
        setHappiness((prevHappiness => prevHappiness + 1));
    }
    function makeSad() {
        setHappiness((prevHappiness => prevHappiness - 1))
    }
    useEffect(() => {
        setImgSrc(happiness > 9 ? "raccoon-flower.jpeg" : "raccoon-guitar.jpeg")

    }, [happiness]);
    return (
        <>
            <p>raccoon</p>
            <img src={imgSrc} />
            <p>Happiness level: {happiness}</p>
            <button onClick={feedRaccoon}>feed trash</button>
            <button onClick={makeSad}>tickle feet</button>
        </>
    )
}