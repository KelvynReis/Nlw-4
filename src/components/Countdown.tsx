import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
    
    const { minutes,
        seconds,
        isActive,
        hasFinished,
        resetCountdowm,
        startCountdown
        } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');
    
    return(
        <div>
            <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
            </div>

            { hasFinished ? (
                <button
                disabled
                className={styles.CountdownButton} 
                >
                Ciclo encerrado
                </button>
            ): (
                <>
                    {isActive ? (
                        <button
                        type="button"
                        className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                        onClick={resetCountdowm}
                        >
                        Abandonar Ciclo
                        </button>
                    ): (
                        <button
                        type="button"
                        className={styles.CountdownButton}
                        onClick={startCountdown}
                        >
                        Iniciar um ciclo
                        </button>
                    )}
                </>
            )}

        </div>
        
    );
}