import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './routines.module.scss';
import { useApi } from '../../Components/Api/api';

function Routines(){
    const {exercises, addExercise, routines, setRoutines} = useApi();
    const [popUp, setPopUp] = useState(false);
    console.log(routines);

    
    return (
        <>
            <div className={styles.routines}>
                <header className={styles.routineHeader}>
                    <h2>Routines</h2>
                    <p>browse and explore</p>
                </header>
                <div>
                    <div className={styles.routinesList}>
                        {routines === null ? routines.map(x => (
                            <div>{x.name}</div>
                        )) : (
                            <>
                                <p>No Routines Yet</p>
                                <p>Create your first Routine</p>
                                <Link onClick={(() => setPopUp(prev => !prev))}>Create a routine</Link>
                            </>
                        )}
                    </div>
                </div>
                <div className={popUp ? styles.popUp : styles.hide}>
                    <ul>
                        {exercises.map(x => (
                            <li key={x.id}>
                                <img src={x.image} width="40px" height="40px"/>
                                <p>{x.name}</p>
                                <button onClick={addExercise}>+</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={(() => setPopUp(prev => !prev))} className={styles.doneButton}>DONE</button>
                </div>
            </div>
        </>
    )
};

export default Routines;