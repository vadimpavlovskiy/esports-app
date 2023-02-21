import RunningEvent from '../components/running-event/running-event';
import styles from '../styles/running-events/running-events.module.css'

const RunningEvents = ({data}) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <div className={styles.running_events}>
            {data.map((event) => {
                return (
                    <div key={event.id}>
                         <RunningEvent slug={event.slug}  id={event.id} name={event.league.name} src={event.league.image_url} begin_at={event.begin_at} end_at={event.end_at}/>
                    </div>
                )
            })}
        </div>
    )
}

export default RunningEvents;