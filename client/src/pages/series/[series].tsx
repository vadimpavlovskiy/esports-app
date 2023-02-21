import Image from "next/image";
import { useRouter } from "next/router";
import {format} from 'date-fns';

const SeriesPageSingle = ({data}) => {
    const router = useRouter();
    console.log('====================================');
    console.log(data.data);
    console.log('====================================');
    return (
        <div>
            <h1>{data.data.league.name}</h1>
            <Image src={data.data.league.image_url} width={700} height={300} alt={data.data.league.name}/>
            <h2>
                {data.data.begin_at ? format(new Date(data.data.begin_at), 'MM/dd/yyyy' ) : null} - {data.data.end_at ? format(new Date(data.data.end_at),'MM/dd/yyyy') : 'unknown'}
            </h2>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const seriesBySlug = await fetch(`http://localhost:8000/api/games/${params.series}`);
    const data = await seriesBySlug.json()

    return {
        props: {data}
    }
}

export default SeriesPageSingle;