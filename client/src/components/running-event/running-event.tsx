import {format} from 'date-fns';
import Image from 'next/image';
import unknown from '../../public/images/download.jpeg';
import styles from '../../styles/running-event/running-event.module.css'

const RunningEvent = ({id, name, src, begin_at, end_at}) => {
    return (
        <div key={id} className={styles.running_event}>
            <h3>{name}</h3>
            <Image width={250} height={120} src={src ? src : unknown} alt={name} />
            <p className={styles.beggining_time}>{format(new Date(begin_at), 'MM/dd/yyyy' )} - {format(new Date(end_at),'MM/dd/yyyy')}</p>
        </div>
    )
}

export default RunningEvent