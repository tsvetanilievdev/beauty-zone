import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserBooking, getAll } from '../../services/beautyZoneService.js';
import styles from './Booking.module.css'


export const Booking = () => {
    const [selectedType, setSelectType] = useState('Body');
    const [selectedProcedures, setSelectProcedures] = useState([]);
    const navigation = useNavigate();
    
    const todayString = new Date().toISOString().slice(0,10);
    
    useEffect(() => {
        getAll().then(res => {
            const filteredArr = res.filter(x => x.type == selectedType).reduce((a,c) => {a.push(c.name); return a}  , []);
            setSelectProcedures(filteredArr)
        });
    }, [selectedType])

    async function onChangeType(e){
        setSelectType(e.target.value);
    }


    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const type = formData.get('select-type');
        const name = formData.get('select-procedure');
        const date = formData.get('date');
        const hour = formData.get('timeStart');

        const response = await createUserBooking({type, name, date, hour});
        console.log(response);
        navigation('/my-bookings');
    }
    return (
        <form onSubmit={onSubmit}  action="">
            <div className={styles.wrapper}>
                <h3>Create booking</h3>
                <div className={styles['wrap-div'] + " select"}>
                    <label htmlFor="type">Select type: </label>
                    <select onChange={onChangeType}name="select-type">
                        <option value="Body">Body</option>
                        <option value="Face">Face</option>
                        <option value="Hair removal">Hair removal</option>
                    </select>
                </div>

                <div className={styles['wrap-div'] + " select"}>
                    <label htmlFor="procedure">Select Procedure: </label>
                    <select name="select-procedure">
                        {selectedProcedures.length > 0
                            ? selectedProcedures.map((x,i) => <option key={i} value={x}>{x}</option>)
                            : null}
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