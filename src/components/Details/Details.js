import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { getProcedureById } from "../../services/beautyZoneService"
import './Details.css'


const DetailsCard = () => {
    const [currCard, setCurrCard] = useState({});
    const {procedureId} = useParams();


    useEffect(() => {
        getProcedureById(procedureId).then(res =>  setCurrCard(res))
    }, [])

    return (
        <div className="container-details">
            <div className="card-details">
                <div className="card-header">
                    <img src={currCard.imageUrl} alt="rover" />
                </div>
                <div className="card-body-details">
                    <h2>{currCard.name}</h2>
                    <span className="tag tag-teal">{currCard.type}</span>
                    <h4>{currCard.price} $</h4>
                    <p>
                        {currCard.description}
                    </p>
                </div>
            </div>
        </div>
    )
}


export const Details = () => {
    const { user, id } = useContext(AuthContext);

    return (
        <div>
            {user.email
                ? <DetailsCard />
                : <div className="guest-details">
                <   div className="vertical-center">
                        <h4>You cannot see details about this procedure, you must be a Member!</h4>
                        <div className="inside-div"></div>
                        <Link className="a-mar" to="/login">Please login</Link>
                        <p className="inside-p">OR</p>
                        <Link className="a-mar" to="/register">Please register</Link>
                    </div>
                </div> 
            }
        </div>
    )
}