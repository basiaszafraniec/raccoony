import { useEffect, useState } from "react";
import "../styles/raccoon.css"

export default function Raccoon() {
    const [happiness, setHappiness] = useState(5);
    const [imgSrc, setImgSrc] = useState("raccoon-guitar.jpeg");

    function feedRaccoon() {
        setHappiness(prevHappiness => prevHappiness + 1);
    }

    function makeSad() {
        setHappiness(prevHappiness => prevHappiness - 1);
    }

    useEffect(() => {
        if (happiness < 0) {
            setImgSrc("raccoon-gun.jpeg");
        } else if (happiness >= 0 && happiness < 3) {
            setImgSrc("raccoon-cig.jpeg");
        } else if (happiness >= 3 && happiness <= 5) {
            setImgSrc("raccoon-guitar.jpeg");
        } else if (happiness > 5 && happiness < 8) {
            setImgSrc("raccoon-pool.jpeg");
        } else if (happiness >= 8 && happiness < 10) {
            setImgSrc("raccoon-dzaid-ufolud.jpeg");
        } else {
            setImgSrc("raccoon-flower.jpeg");
        }
    }, [happiness]);

    return (
        <div className="raccoon-container">
            <p>raccoon</p>
            <img src={imgSrc} alt="raccoon" />
            <p>Happiness level: {happiness}</p>
            <button onClick={feedRaccoon}>feed trash</button>
            <button onClick={makeSad}>tickle feet</button>
        </div>
    );
}
