import { createUserBooking } from '../../services/beautyZoneService';
import styles from './Booking.module.css'


export const Booking = () => {
    const todayString = new Date().toISOString().slice(0,10);

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const type = formData.get('select-type');
        const name = formData.get('select-procedure');
        const date = formData.get('date');
        const hour = formData.get('timeStart');

        const response = await createUserBooking({type, name, date, hour});
        console.log(response);

    }
    return (
        <form onSubmit={onSubmit}  action="">
            <div className={styles.wrapper}>
                <h3>Create booking</h3>
                <div className={styles['wrap-div'] + " select"}>
                    <label htmlFor="type">Select type: </label>
                    <select name="select-type">
                        <option value="body">Body</option>
                        <option value="face">Face</option>
                        <option value="hair-removal">Гair removal</option>
                    </select>
                </div>

                <div className={styles['wrap-div'] + " select"}>
                    <label htmlFor="procedure">Select Procedure: </label>
                    <select name="select-procedure">
                        <option value="lpg">LPG</option>
                        <option value="body">LAZER</option>
                        <option value="remove">Remover</option>
                        <option value="yes">yes</option>
                    </select>
                </div>
                <div className={styles['wrap-div']}>
                    <label htmlFor="date">Choose date: </label>
                    <input type="date" name="date" min={todayString}/>
                </div>
                <div className={styles['wrap-div']}>
                    <label htmlFor="timeStart">Choose hour: </label>
                    <select name="timeStart">
                        <option value="8">08:00</option>
                        <option value="9">09:00</option>
                        <option value="10">10:00</option>
                        <option value="11">11:00</option>
                        <option value="12">12:00</option>
                        <option value="13">13:00</option>
                        <option value="14">14:00</option>
                        <option value="15">15:00</option>
                        <option value="16">16:00</option>
                        <option value="17">17:00</option>
                    </select>
                </div>
                <button>Submit</button>
            </div>
        </form>
    )
}