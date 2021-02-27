import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const { activeChallenge, resetChallenges } = useContext(ChallengesContexts);

    return(
        <div className={styles.challengeBoxContainer}>

            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount}
                    </header>
                    
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                         type="button"
                         className={styles.challengeFailedButton}
                         onClick={resetChallenges}
                         >
                            Falhei
                         </button>
                        <button
                         type="button"
                         className={styles.challengeSucceededButton}
                         >
                            Completei
                         </button>
                    </footer>
                </div>
            ):(
                <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber desafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Leveu Up"/>
                    Avance de Level completando desafios.
                </p>
            </div>
            )}
            
        </div>
    );
}