import { FC } from "react";
import Player from "../components/player/player";
import IPlayer from "../interfaces/player.interface";

interface IPlayersInfo {
    players: IPlayer[]
}

const PlayersInfo = ({players}:IPlayersInfo) => {
    return (
        <div>
            {players.map((player) => {
                return (
                    <Player first_name={player.first_name} last_name={player.last_name} nationality={player.nationality} image_url={player.image_url} name={player.name}/>
                )
            })}
        </div>
    )
}

export default PlayersInfo;