import Image from "next/image";
import PlayersInfo from "./players-info";
import IPlayer from "../interfaces/player.interface";
import { Avatar, Box } from "@chakra-ui/react";

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
    return (
        <Box paddingTop={14} minH={'100vh'} bgColor={`#1a1b20`} color={'white'} display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} gap={10} justifyContent={'center'} alignItems={"center"}>
                {data.image_url ? <Avatar backgroundSize={50} src={data.image_url} bgSize={'contain'} size={'xl'}  /> : null}
                <h1>{data.name}</h1>
            </Box>
            <h2>Players:</h2>
            <PlayersInfo players={data.players}/>
        </Box>
    )
}

export default TeamInformation;