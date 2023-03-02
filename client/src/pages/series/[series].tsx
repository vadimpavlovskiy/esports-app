import Image from "next/image";
import { useRouter } from "next/router";
import {format} from 'date-fns';
import TournamentsMatches from "../../layouts/tournamens-matches";
import styles from '../../styles/series/series.module.css';


const SeriesPageSingle = ({data}) => {
    const router = useRouter();
    return (
        <div className={styles.serie}>
            <h1>{data.data.league.name}</h1>
            <Image src={data.data.league.image_url} width={700} height={300} alt={data.data.league.name}/>
            <p>
                {data.data.begin_at ? format(new Date(data.data.begin_at), 'MM/dd/yyyy' ) : null} - {data.data.end_at ? format(new Date(data.data.end_at),'MM/dd/yyyy') : 'unknown'}
            </p>
            <h2>Tournaments Matches</h2>
            {
                data.data.tournaments.map((tournament) => {
                    return (
                        <TournamentsMatches tournament_id={tournament.id} name={tournament.name}/>
                    )
                })
            }
        </div>
    )
}

export async function getServerSideProps({params}) {
    const seriesBySlug = await fetch(`http://localhost:8000/api/games/${params.series}`);
    const data = await seriesBySlug.json()

    return {
        props: {data}
    }
}

export default SeriesPageSingle;