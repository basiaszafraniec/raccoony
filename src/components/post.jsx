import "../styles/post.css"

export default function Post({ post }) {
    return (
        <>
            <div className="post-header">
                <div>
                    <img src="raccoon-princess" alt="profile picture" />
                    <h2>Little_Trash_Boy</h2>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className="post-inner">
                <p>guysss free bread next to Netto in Viby J. I just got 3 pieces. don’t let it go to waste!!!</p>
                <img src="raccoon-princess.jpeg" alt=""/>
            </div>
        </>
    )
}