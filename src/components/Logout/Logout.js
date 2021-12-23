import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/beautyZoneService";


export const Logout = () => {
    const {user, onLogout} = useContext(AuthContext);
    const navigate = useNavigate();
    logout();
    onLogout()

    if(user){
        navigate('/login')
    }

    return(
        <h3>Logging out....</h3>
    )

}