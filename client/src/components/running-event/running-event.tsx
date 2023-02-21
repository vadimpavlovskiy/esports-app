import {format} from 'date-fns';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import unknown from '../../public/images/download.jpeg';
import styles from '../../styles/running-event/running-event.module.css'

const RunningEvent = ({id, name, src, begin_at, end_at, slug}) => {
    return (
        <div key={id} className={styles.running_event}>
            <h3><Link href={`/series/${encodeURIComponent(slug)}`}>{name}</Link></h3>
            <Image width={250} height={120} src={src ? src : unknown} alt={name} />
            <p className={styles.beggining_time}>{begin_at ? format(new Date(begin_at), 'MM/dd/yyyy' ) : null} - {end_at ? format(new Date(end_at),'MM/dd/yyyy') : 'unknown'}</p>
        </div>
    )
}

export default RunningEvent