import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const { activeChallenge, resetChallenges, completedChallenge } = useContext(ChallengesContext);
    const { resetCountdowm } = useContext(CountdownContext);

    function handleChallengeSuccedeed(){
        completedChallenge();
        resetCountdowm();
    }

    function handleChallegeFailed(){
        resetChallenges();
        resetCountdowm();
    }
    return(
        <div className={styles.challengeBoxContainer}>

            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount} de XP
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
                         onClick={handleChallegeFailed}
                         >
                            Falhei
                         </button>
                        <button
                         type="button"
                         className={styles.challengeSucceededButton}
                         onClick={handleChallengeSuccedeed}
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