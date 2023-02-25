import Image from "next/image";
import IPlayer from "../../interfaces/player.interface";

const Player = ({first_name, last_name, nationality, name ,image_url}: IPlayer) => {
    return (
        <div>
            <p>{name}</p>
            <p>{first_name} {last_name}</p>
            <p>Country: {nationality}</p>
            {image_url ? <Image src={image_url} alt={name} width={350} height={300} /> : null}
        </div>
    )
}

export default Player;