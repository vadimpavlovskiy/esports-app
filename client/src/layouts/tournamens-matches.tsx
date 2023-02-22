import { useEffect, useState } from "react";
import TournamentMatch from "../components/tournament-match/tournament-match";
import styles from '../styles/tournament-matches/tournament-matches.module.css';

const TournamentsMatches = ({name, tournament_id}) => {
    const [matches, setMatches] = useState([]);

    async function fetchData() {
        const results = await fetch (`http://localhost:8000/api/games/${tournament_id}/matches`);

        const {data} = await results.json();

        const sortedData = data.sort((a,b) => {
            if(a.begin_at<b.begin_at) {
                return 1;
            }
        });

        console.log('====================================');
        console.log(sortedData);
        console.log('====================================');
        setMatches(sortedData);
    }
    useEffect(() => {
      fetchData()
      return () => {
      }
    }, [])
    
    return (
        <div className="tournaments-matches">
            <div className={styles.tournaments_matches_list}>
                {
                    matches.map((match) => (
                        <TournamentMatch opponents={match.opponents} results={match.results}/>
                    ))
                }
            </div>

        </div>
    )
}

export default TournamentsMatches;