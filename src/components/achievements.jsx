import React from "react";

const Achievements = ({ user }) => {
    if (!user || !user.achievements) {
        return <p>loading achievements...</p>;
    }

    const achievementImages = {
        "completed-profile": "https://imgur.com/RCJrxCY.jpeg",
        "added-item-to-collection": "https://imgur.com/rToUbLv.jpeg",
        "fed-raccoon": "https://imgur.com/Ss39yeK.jpeg",
        "became-god": "https://imgur.com/KWAlRtb.jpeg",
        "figured-out-how-to-use-canvas": "https://imgur.com/D3hBrEF.jpeg",
        "is-a-pretty-boy": "https://imgur.com/V6hDuIo.jpeg",
    };

    const achievementsArray = Object.entries(user.achievements);

    return (

        <div className="achievements-container">
            <div className="post-header">
                <h2 className="szczur">achievements</h2>
            </div>
            <div className="achievements">
                {achievementsArray.map(([key, value]) => {
                    const imageSrc = achievementImages[key];
                    const imageStyle = {
                        filter: value ? "none" : "grayscale(100%) opacity(0.5)",
                    };

                    return (
                        <div key={key} className="achievement">
                            <img
                                src={imageSrc}
                                alt={key}
                                style={imageStyle}
                                title={key.replace(/-/g, " ")}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Achievements;
