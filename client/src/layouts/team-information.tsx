import Image from "next/image";
import emoji from 'country-to-emoji-flag'
import PlayersInfo from "./players-info";
import IPlayer from "../interfaces/player.interface";

interface ITeamData {
    image_url: string;
    name: string;
    id: Number;
    slug: string;
    location: string;
    players: Array<IPlayer>
}

interface ITeamInformation {
    data: ITeamData
}

const TeamInformation = ({data}:ITeamInformation) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <div>
            <h1>{data.name}</h1>
            {data.image_url ? <Image src={data.image_url} alt={data.slug} width={300} height={150} /> : null}
            <h2>Players:</h2>
            <PlayersInfo players={data.players}/>
        </div>
    )
}

export default TeamInformation;