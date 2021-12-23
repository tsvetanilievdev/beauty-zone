import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../../contexts/AuthContext"
import { getProcedureById } from "../../services/beautyZoneService"
import './Details.css'


const DetailsCard = () => {
    const [currCard, setCurrCard] = useState({});
    const {procedureId} = useParams();


    useEffect(() => {
        getProcedureById(procedureId).then(res =>  setCurrCard(res))
    }, [])

    console.log(currCard)

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
                : <div>
                    <h5>You cannot see details about this procedure</h5>
                    <a href="/login">Please login</a>
                    OR
                    <a href="/register">Please register</a>

                </div>
            }
        </div>
    )
}