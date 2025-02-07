import { useEffect, useState } from "react";
import "../styles/raccoon.css";

export default function Raccoon({ profileInfo }) {
    const initialEnergy = profileInfo?.["master-user"]?.raccoonEnergyPoints || 0;
    const [energy, setEnergy] = useState(initialEnergy);
    const [happiness, setHappiness] = useState(5);
    const [silliness, setSilliness] = useState(5);
    const [imgSrc, setImgSrc] = useState("raccoon-guitar.jpeg");
    const [bgColor, setBgColor] = useState(localStorage.getItem("raccoonBgColor") || "#ffffff");
    const [isShaking, setIsShaking] = useState(false);

    function handleAction(action) {
        if (energy > 0) {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 300); // remove shake after 0.3s

            if (action === "feed") setHappiness(prev => prev + 1);
            if (action === "tickle") setSilliness(prev => prev + 1);
            
            setEnergy(prev => prev - 1);
        }
    }

    function handleColorChange(e) {
        const newColor = e.target.value;
        setBgColor(newColor);
        localStorage.setItem("raccoonBgColor", newColor);
    }

    useEffect(() => {
        const totalPoints = happiness + silliness;

        if (totalPoints < 6) {
            setImgSrc("raccoon-gun.jpeg");
        } else if (totalPoints < 9) {
            setImgSrc("raccoon-cig.jpeg");
        } else if (totalPoints < 12) {
            setImgSrc("raccoon-guitar.jpeg");
        } else if (totalPoints < 15) {
            setImgSrc("raccoon-pool.jpeg");
        } else if (totalPoints < 18) {
            setImgSrc("raccoon-dzaid-ufolud.jpeg");
        } else {
            setImgSrc("raccoon-flower.jpeg");
        }
    }, [happiness, silliness]);

    return (
        <div className="raccoon-container" style={{ backgroundColor: bgColor }}>
            <input type="color" value={bgColor} onChange={handleColorChange} className="color-picker" />
            <h2>Happiness: {happiness} | Silliness: {silliness}</h2>
            <img src={imgSrc} alt="raccoon" className={isShaking ? "shake" : ""} />
            <p>Energy points: {energy}</p>
            <button onClick={() => handleAction("feed")} disabled={energy === 0}>feed trash</button>
            <button onClick={() => handleAction("tickle")} disabled={energy === 0}>tickle feet</button>
        </div>
    );
}
