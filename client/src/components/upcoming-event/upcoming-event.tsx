import unknown from '../../public/images/download.jpeg';
import {format} from 'date-fns';
import Image from 'next/image';
import styles from '../../styles/upcoming-event/upcoming-event.module.css'

const UpComingEvent = ({id, name, src, begin_at,}) => {
    return (
        <div className={styles.upcoming_event} key={id}>
            <h3>{name}</h3>
            {src ? <Image width={200} height={100} src={src ? src : unknown} alt={name} />: ''}
            <p className={styles.beggining_time}>{format(new Date(begin_at), 'MM/dd/yyyy' )} - </p>
        </div>
    )
}

export default UpComingEvent;