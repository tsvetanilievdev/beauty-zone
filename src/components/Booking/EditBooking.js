import styles from './Booking.module.css'

export const editBooking = () => {

    return (
        <form onSubmit={onSubmit}  action="">
        <div className={styles.wrapper}>
            <h3>Edit my booking</h3>
            <div className={styles['wrap-div'] + " select"}>
                <label htmlFor="type">Select type: </label>
                <select name="select-type">
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