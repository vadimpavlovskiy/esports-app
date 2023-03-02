import { Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoadingSceleton from "../components/sceleton-loading/sceleton-loading";
import TournamentMatch from "../components/tournament-match/tournament-match";
import styles from '../styles/tournament-matches/tournament-matches.module.css';

const TournamentsMatches = ({name, tournament_id}) => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoaded] = useState(false);

    async function fetchData() {
        const results = await fetch (`http://localhost:8000/api/games/${tournament_id}/matches`);

        const {data} = await results.json();

        const sortedData = data.sort((a,b) => {
            if(a.begin_at<b.begin_at) {
                return 1;
            }
        });
        setMatches(sortedData);
    }
    useEffect(() => {
        setTimeout(()=> {
            fetchData()
        }, 2000)
      
      return () => {
      }
    }, [])

    
    
    return (

        <div className="tournaments-matches">
                    <div className={styles.tournaments_matches_list}>
                            {matches.length > 0 ?
                                matches.map((match, index) => (
                                        <TournamentMatch key={index} opponents={match.opponents} results={match.results}/>
                                    
                                ))
                                : <LoadingSceleton />
                            }
                    </div>
        </div>

    )
}

export default TournamentsMatches;