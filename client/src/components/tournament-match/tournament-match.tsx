import { Box, Container } from "@chakra-ui/react";
import { domAnimation, LazyMotion, m } from "framer-motion";

import { Image } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../../styles/tournament-match/tournament-match.module.css';
import { format } from "date-fns";
import { Badge } from '@chakra-ui/react'


interface ITournamentMatch {
    opponents: Array<ITournamentOpponents>,
    results: Array<ITournamentResults>
    matchTime: string,
    currentTime: string
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

const TournamentMatch = ({opponents, currentTime, matchTime, results}:ITournamentMatch) => {
    
        if((opponents[1] && opponents[0])) {
            return (
                <LazyMotion features={domAnimation}>
                <m.div layout transition={{delay: 0.3, type: "spring", stiffness: 50 }} viewport={{ once: true }} initial={{scaleX: 0}} whileInView={{scaleX: 1}}>
                    <Container  minH={50} rounded={24} display={'flex'} flexDirection={'column'} minW={800} alignItems={'center'} bgColor={'#42434a'} color={'#00000'}>
                            <Container minW={800} justifyContent={'space-around'} display={'flex'} alignItems={'center'} paddingY={5}>
            {opponents[0] ? 
            <Box minW={200} maxW={200}>
                <Link href={`/teams/${encodeURIComponent(opponents[0].opponent.id)}`}>
                    <div className={styles.opponent_team}> 
                        {opponents[0].opponent.image_url ? <Image src={opponents[0].opponent.image_url} alt={opponents[0].opponent.slug} width={50} height={50}/> : ''}
                        <p>{opponents[0].opponent.name}</p> 
                    </div>
                </Link>
            </Box>
            : <p>Unknown opponent</p>
    }
             <Box display={'flex'} alignItems={'center'}  justifyContent={'space-between'} minW={200} maxW={200}>
                <p className={styles.score}>{results[0].score}</p>
             {new Date(currentTime) < new Date(matchTime) ? (
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <Badge variant='solid' colorScheme='green'>
                                    Ongoing
                                </Badge>
                                <p>{format(new Date(matchTime), 'haa:mm')}</p>
                                <p>{format(new Date(matchTime), 'MM/dd')}</p>
                            </Box>
                            ) : ''}
                <p className={styles.score}>{results[1].score}</p>
            </Box>
            {opponents[1] ? 
            <Box minW={200} maxW={200}>
                <Link href={`/teams/${encodeURIComponent(opponents[0].opponent.id)}`}>
                    <div className={styles.opponent_team}>
                    {opponents[1].opponent.image_url ? <Image src={opponents[1].opponent.image_url} alt={opponents[1].opponent.slug} width={50} height={50}/> : ''}
                        <p>{opponents[1].opponent.name}</p> 
                    </div>
                </Link> 
                </Box>: <p>Unknown opponent</p>}
            </Container>
            </Container>
        </m.div>
        </LazyMotion>
    )
} else {
    return null;
}
}

export default TournamentMatch;