import { Box } from "@chakra-ui/react";
import { FC } from "react";
import Player from "../components/player/player";
import IPlayer from "../interfaces/player.interface";

interface IPlayersInfo {
    players: IPlayer[]
}

const PlayersInfo = ({players}:IPlayersInfo) => {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            {players.map((player) => {
                return (
                <Box rounded={12} justifyContent={'center'} bgColor={'#42434a'} display={'flex'} minWidth={400}  marginY={30}>
                        <Player first_name={player.first_name} last_name={player.last_name} nationality={player.nationality} image_url={player.image_url} name={player.name}/>
                    </Box>
                )
            })}
        </Box>
    )
}

export default PlayersInfo;