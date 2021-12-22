import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editUserBooking, getOneById } from '../../services/beautyZoneService';
import styles from './EditBooking.module.css'

export const EditBooking = () => {
    const [currBooking, setCurrBooking] = useState();
    const todayString = new Date().toISOString().slice(0,10);
    const {id} = useParams();
    const navigate = useNavigate();
    
    //get one buy id, pass to form
    useEffect(() => {
        getOneById(id).then(res => setCurrBooking(res));
    }, [])
    //onSubmit edit 
    console.log(currBooking)

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const type = formData.get('select-type');
        const name = formData.get('select-procedure');
        const date = formData.get('date');
        const hour = formData.get('timeStart');
        
        if(date == ''){
            alert('Please choose DATE')
        }
        await editUserBooking(id, {type, name, date, hour});
        navigate('/my-bookings');
    }

    return (
        <form onSubmit={onSubmit} action="">
        <div className={styles.wrapper}>
            <h3>Edit my date or hour</h3>
            <div className={styles['wrap-div'] + " select"}>
                <label htmlFor="type">Select type: </label>
                <select name="select-type">
                    {currBooking != null
                        ? <option key={currBooking._id} value={currBooking.type}>{currBooking.type}</option>
                        : null
                    }
                </select>
            </div>

            <div className={styles['wrap-div'] + " select"}>
                <label htmlFor="procedure">Select Procedure: </label>
                <select name="select-procedure">
                {currBooking != null
                        ? <option key={currBooking._id} value={currBooking.name}>{currBooking.name}</option>
                        : null
                    }
                </select>
            </div>
            <div className={styles['wrap-div']}>
                <label htmlFor="date">Choose date: </label>
                <input type="date" name="date" min={todayString}/>
            </div>
            <div className={styles['wrap-div']}>
                <label htmlFor="timeStart">Choose hour: </label>
                <select name="timeStart">
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                </select>
            </div>
            <button>Submit</button>
        </div>
    </form>
    )
}