import Image from "next/image";
import { useRouter } from "next/router";
import LoadingSceleton from "../../components/sceleton-loading/sceleton-loading";
import SeriesInfo from "../../layouts/series-info";
import TournamentsMatches from "../../layouts/tournamens-matches";
import styles from '../../styles/series/series.module.css';


const SeriesPageSingle = ({data}) => {
    const router = useRouter();
    console.log(data.data);
    
    return (
        <div className={styles.serie}>
           <SeriesInfo data={data.data}/>
           <h2 className={styles.serie_matches_header}>Tournaments Matches</h2>
            {
                data.data.tournaments.map((tournament) => {
                    return (
                        <TournamentsMatches anotherTournaments={data.data.tournaments} tournament_id={tournament.id} name={tournament.name}/>
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