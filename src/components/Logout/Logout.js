import { useNavigate } from "react-router-dom";
import { logout } from "../../services/beautyZoneService"
import { removeUserData } from "../../utils/util";

export const Logout = () => {
    let navigation = useNavigate();

    return (
        <h3>Log out....</h3>
    )
}