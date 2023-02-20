import UpComingEvent from '../components/upcoming-event/upcoming-event';
import styles from '../styles/upcoming-events/upcoming-events.module.css';
type IData = {
    data:Array<any>
}

function UpcomingEvents ({data}:IData) {
    console.log(data);
return (
    <div className={styles.upcoming_events}>
        <h2>Upcoming events</h2>
        {data.map((event) => {
            return (
                <UpComingEvent key={event.id} id={event.id} name={event.league.name} src={event.league.image_url} begin_at={event.begin_at}/>
            )
        })}
    </div>
)
}

export default UpcomingEvents;