import { Avatar, Box, Image, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"
import {format} from 'date-fns';
import { domAnimation, LazyMotion, m } from "framer-motion";
import styles from '../styles/series-info/series-info.module.css';


const SeriesInfo = ({data}) => {
    const tournamens:Array<any> = data.tournaments;
    console.log(tournamens[tournamens.length-1]);
    
    return (
        <Box padding={50} display={'flex'} width={'100%'} justifyContent={'center'}>
            <LazyMotion features={domAnimation}>
                <m.div transition={{delay: 1, type: "spring", stiffness: 80 }} viewport={{ once: true }} initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}}>
                    <div className={styles.series_info}>
                        <Avatar 
                            loading={'lazy'} 
                            src={data.league.image_url} 
                            size={'2xl'}
                        />
                        <div className={styles.series_info_aditional}>
                            <h1 className={styles.series_info_header}>{data.league.name}</h1>
                            <p>
                                Begin date: {data.begin_at ? format(new Date(data.begin_at), 'MM/dd/yyyy' ) : null}
                            </p>
                            <p>
                                End date: {data.end_at ? format(new Date(data.end_at),'MM/dd/yyyy') : 'unknown'}
                            </p>
                            <p>
                                Prizepool: {tournamens[tournamens.length-1].prizepool ? tournamens[tournamens.length-1].prizepool : null}
                            </p>
                        </div>
                    </div>
                </m.div>
            </LazyMotion>
        </Box>
    )
}

export default SeriesInfo