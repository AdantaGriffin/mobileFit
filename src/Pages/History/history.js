import React from 'react';
import styles from './history.module.scss';

function History(){
    return(
        <>
            <div className={styles.history}>
                <header>
                    <h2>History</h2>
                    <p>browse and explore</p>
                </header>
                <table className={styles.historyRecords}>
                    <tbody>
                        <tr>
                            <td>
                                <p>total workouts</p>
                                <p>0</p>
                            </td>
                            <td>
                                <p>total minnutes</p>
                                <p>0</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>total sets</p>
                                <p>0</p>
                            </td>
                            <td>
                                <p>total reps</p>
                                <p>0</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.historyList}>
                    <p>No Workouts Yet</p>
                    <p>Complete your first workout to see it here</p>
                </div>
            </div>
        </>
    )
};

export default History;