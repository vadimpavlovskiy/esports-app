import styles from '../styles/styles.module.css';
import UpcomingEvents from '../layouts/upcoming-events';
import { NextPage } from 'next';
import { ComponentProps } from 'react';
import { AppProps } from 'next/app';
import RunningEvents from '../layouts/running-events';

interface IProps {
  upcomingData: any,
  runningData: any
}

const HomePage: NextPage<IProps> = (props) => {
    return (
      <div className={styles.test}>
        <h2>Coming Events</h2>
        <RunningEvents data={props.runningData.data}/>
        <UpcomingEvents data={props.upcomingData.data}/>
      </div>
    )
  }
  
export async function getServerSideProps() {
  const upcoming = await fetch('http://localhost:8000/api/games/upcoming');
  const running = await fetch('http://localhost:8000/api/games/running');

  const upcomingData = await upcoming.json();
  const runningData = await running.json();

  return {props:{ 
    upcomingData,
    runningData
   }}
}

export default HomePage
