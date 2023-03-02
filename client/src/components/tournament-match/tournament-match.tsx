import { Box, Container } from "@chakra-ui/react";
import { domAnimation, LazyMotion, m } from "framer-motion";

import { Image } from "@chakra-ui/react";
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
                <LazyMotion features={domAnimation}>
                <m.div layout transition={{delay: 0.3, type: "spring", stiffness: 50 }} viewport={{ once: true }} initial={{scaleX: 0}} whileInView={{scaleX: 1}}>
                    <Container rounded={24} display={'flex'} minW={800} alignItems={'center'} bgColor={'#42434a'} color={'#00000'}>
            {opponents[0] ? 
            <Box minW={300}>
                <Link href={`/teams/${encodeURIComponent(opponents[0].opponent.id)}`}>
                    <div className={styles.opponent_team}> 
                        {opponents[0].opponent.image_url ? <Image src={opponents[0].opponent.image_url} alt={opponents[0].opponent.slug} width={50} height={50}/> : ''}
                        <p>{opponents[0].opponent.name}</p> 
                    </div>
                </Link>
            </Box>
            : <p>Unknown opponent</p>
    }
             <Box display={'flex'} justifyContent={'space-between'}  minW={200}>
                {results.map((result) => (
                   <p className={styles.score}>{result.score}</p>
                ))}
            </Box>
            {opponents[1] ? 
            <Box minW={300}>
                <Link href={`/teams/${encodeURIComponent(opponents[0].opponent.id)}`}>
                    <div className={styles.opponent_team}>
                    {opponents[1].opponent.image_url ? <Image src={opponents[1].opponent.image_url} alt={opponents[1].opponent.slug} width={50} height={50}/> : ''}
                        <p>{opponents[1].opponent.name}</p> 
                    </div>
                </Link> 
                </Box>: <p>Unknown opponent</p>}
            </Container>
        </m.div>
        </LazyMotion>
    )
} else {
    return null;
}
}

export default TournamentMatch;