import { useEffect, useState } from "react";
import "../styles/raccoon.css"

export default function Raccoon() {
    const [happiness, setHappiness] = useState(5);
    function feedRaccoon() {
        setHappiness((prevHappiness => prevHappiness + 1));
    }
    useEffect(() => {
        setHappiness(5);
    }, []);
    return (
        <>
            <p>raccoon</p>
            <img src="raccoon-guitar.jpeg" />
            <p>Happiness level: {happiness}</p>
            <button onClick={feedRaccoon}>feed trash</button>
        </>
    )
}