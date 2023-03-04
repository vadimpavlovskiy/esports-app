import { Box } from "@chakra-ui/react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import Image from "next/image";
import IPlayer from "../../interfaces/player.interface";

const Player = ({first_name, last_name, nationality, name ,image_url}: IPlayer) => {
    return (
            <LazyMotion features={domAnimation}>
                <m.div initial={{scaleX: 0}} transition={{delay: 0.3, type: "spring", stiffness: 50 }} viewport={{ once: true }} whileInView={{scaleX: 1}}>
                        <Box display={'flex'} flexDirection={'column'}>
                        <p>{name}</p>
                        <p>{first_name} {last_name}</p>
                        <p>Country: {nationality}</p>
                        {image_url ? <Image src={image_url} alt={name} width={350} height={300} /> : null}
                </Box>
                </m.div>
            </LazyMotion>
    )
}

export default Player;