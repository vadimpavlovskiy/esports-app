import { log } from "console";
import { useEffect, useState } from "react";
import LoadingSceleton from "../components/sceleton-loading/sceleton-loading";
import TournamentMatch from "../components/tournament-match/tournament-match";
import styles from '../styles/tournament-matches/tournament-matches.module.css';

const TournamentsMatches = ({name, anotherTournaments, tournament_id}) => {
    const [matches, setMatches] = useState([]);

    async function fetchData() {
        const baseArray = await anotherTournaments.map(async (tournament) => {
            const results = await fetch (`http://localhost:8000/api/games/${tournament.id}/matches`);
            const {data} = await results.json();

            return data
        })
        Promise.all(baseArray).then((val) => setMatches([...matches, val]))
    }
    useEffect(() => {
            fetchData()
      return () => {
      }
    }, [])

    const currentTime = new Date();
    
    return (
        <div className="tournaments-matches">
                    <div className={styles.tournaments_matches_list}>
                        <h2>{name}</h2>
                            {matches && matches.length > 0 ?
                                matches[0].map((matches, index) => {
                                        matches.sort((a,b)=>{if(a.begit_at < b.begit_at){return a}})
                                        console.log(matches);
                                        
                                        return matches.map((match, index) => (
                                             <TournamentMatch currentTime={currentTime.toISOString()} matchTime={match.begin_at} key={index} opponents={match.opponents} results={match.results}/>))
                                        }
                                    )
                                
                                : <LoadingSceleton />
                            }
                    </div>
        </div>

    )
}

export default TournamentsMatches;
