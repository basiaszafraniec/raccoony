import { useParams } from "react-router-dom";
import ProfileCard from "../components/profileComp.jsx";

const UserProfile = ({ users }) => {

    const { userId } = useParams();
    console.log("User ID from URL:", userId); // check if userId is correct
    console.log(users);

    const user = users.find(user => user.id === userId);

    return user ? <ProfileCard user={user} isEditable={false} /> : <div>user not found</div>;
};

export default UserProfile;