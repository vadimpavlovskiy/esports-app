import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/tournament-match/tournament-match.module.css';

interface ITournamentMatch {
    opponents: Array<ITournamentOpponents>,
    results: Array<ITournamentResults>
}
interface ITournamentResults {
    score: string
}
interface ITournamentOpponents {
    opponent: {
        id: 129880,
        slug: string
        name: string,
        image_url: string
    }
}

const TournamentMatch = ({opponents, results}:ITournamentMatch) => {
        if((opponents[1] && opponents[0])) {
            return (
        
        <div className={styles.single_match}>
            {opponents[1] ? <div className={styles.opponent_team}> 
                <Image src={opponents[0].opponent.image_url} alt={opponents[0].opponent.slug} width={50} height={50}/>
                <p>{opponents[0].opponent.name}</p> 
            </div>
            : <p>Unknown opponent</p>
    }
            <div className={styles.score}>
                {results.map((result) => (
                    <div>{result.score}</div>
                ))}
            </div>
            {opponents[1] ?   <div className={styles.opponent_team}>
                <Image src={opponents[1].opponent.image_url} alt={opponents[1].opponent.slug} width={50} height={50}/>
                <p>{opponents[1].opponent.name}</p> 
            </div> : <p>Unknown opponent</p>}
        </div>
    )
} else {
    return null;
}
}

export default TournamentMatch;