import { Navigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/beautyZoneService";


export const Logout = () => {
    const {onLogout} = useContext(AuthContext);
    logout();
    onLogout()
    
    return <Navigate to="/login" replace={true} />
    return (
        <h3>Log out....</h3>
    )
}