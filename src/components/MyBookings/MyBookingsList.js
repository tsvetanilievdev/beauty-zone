import './MyBookingsList.css';
import { useEffect, useState } from 'react';
import { deleteUserBooking, getMyBooking } from '../../services/beautyZoneService';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';




const ListItem = (
    { booking,
        i
    }) => {
    const navigate = useNavigate();

    async function deleteHandler(e){
        const confirmed = window.confirm('Are you sure?');
        if(confirmed){
            await deleteUserBooking(booking._id);
        }
        navigate('/booking');
        
    }

    return (
        <tr>
            <td>{i + 1}</td>
            <td>{booking.date}</td>
            <td>{booking.hour}</td>
            <td>{booking.name}</td>
            <td>{booking.type}</td>
            <td><Link to={`/my-bookings/${booking._id}`}>Edit</Link></td>
            <td><Link onClick={deleteHandler} to="#">Delete</Link></td>
        </tr>
    )
}

export const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        async function getItAll(){
            const myBooks = await getMyBooking(user.id);
            setMyBookings(myBooks.sort((a,b) => new Date(a.date) - new Date(b.date)));
        }
        getItAll()
    }, []);


    return (
        <>
        {myBookings.length > 0
        ? (
            <table className="purpleHorizon">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Hour</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {myBookings.map((x,i) => <ListItem key={x.id} booking={x} i={i}/>)}
                </tbody>
            </table>
        )
        : <h1>You do not have any bookings!</h1>
    }      
        </>
    )
}