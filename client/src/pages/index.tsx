import styles from '../styles/styles.module.css';
import UpcomingEvents from '../layouts/upcoming-events';
import { NextPage } from 'next';
import { ComponentProps } from 'react';

interface IProps {
  data: Object
}

const HomePage: NextPage<IProps> = ({data}) => {
  
    return (
      <div className={styles.test}>
        <h2>Coming Events</h2>
        <UpcomingEvents data={data}/>
      </div>
    )
  }
  
export async function getServerSideProps() {
  const res = await fetch('http://localhost:8000/api/game/');
  const data = await res.json()

  return {props: data}
}

export default HomePage
