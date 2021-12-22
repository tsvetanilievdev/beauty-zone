import './MyBookingsList.css';
import { useEffect, useState } from 'react';
import { getMyBooking } from '../../services/beautyZoneService';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../contexts/AuthContext';


const ListItem = (
    { booking,
        i
    }) => {

    return (
        <tr>
            <td>{i + 1}</td>
            <td>{booking.date}</td>
            <td>{booking.hour}</td>
            <td>{booking.name}</td>
            <td>{booking.type}</td>
            <td><a href="">Edit</a></td>
            <td><a href="">Delete</a></td>
        </tr>
    )
}

export const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const {user} = useContext(AuthContext);
    console.log(user)

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