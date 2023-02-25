import TeamInformation from "../../layouts/team-information";

const TeamsPage = ({data}) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <div>
            <TeamInformation data={data.data}/>
        </div>
    )
};

export async function getServerSideProps({params}) {
    const team = await fetch(`http://localhost:8000/api/teams/${params.teams}`)
    const data = await team.json();
    return {
        props: {data}
    }
}
export default TeamsPage;