import styles from './workout.module.scss';
import React, {useEffect, useState} from 'react';
import {useParams, Navigate, useNavigate} from 'react-router-dom';
import { useApi } from '../../Components/Api/api';

function Workout(){
    const navigate = useNavigate();
    const {routineList, minutes, setMinutes, timer, setTimer, setTimeSum} = useApi();
    const {i} = useParams();
    console.log(routineList[i].exercise)
    const [on, setOn] = useState(false);

    console.log(minutes)
    useEffect(() => {
        if(!on) {
            return
        };
        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, [1000]);
        return () => clearInterval(interval);
    }, [on])
    const start = (e) => {
        setOn(prev => !prev);
        if(!on){
            e.target.innerText = "pause";
        } else{
            e.target.innerText = 'start'
        }
    }
    const done = () => {
        setOn(false);
        setMinutes(prev => prev + timer);
        setTimeSum(prev => prev + timer)
        setTimer(0);
        navigate('/')

    }
    return(
        <>
         {i}
         <div className={styles.workoutContainer}>
            <div className={styles.workoutListContainer}>
            <header>
                <h2>{routineList[i]?.name}</h2>
                <div>{timer/60 < 1 ? 0 : Math.floor(timer / 60)}:{timer%60 < 10 ? "0" + timer%60 : timer%60}</div>
            </header>
            <div className={styles.quote}><i>"Today is just another day one, keep grinding!"</i></div>
                <ul className={styles.workoutList}>
                    {routineList[i]?.exercise?.map(x => (
                        <li key={x.id}>{x.name}</li>
                    ))}
                </ul>
                <div className={styles.workoutButtons}>
                    <button onClick={start}><img src='./play-button.png'/></button>
                    <button onClick={done}><img src='./stop.png'/></button>
                </div>
            </div>
         </div>
        </>
    )
};

export default Workout;