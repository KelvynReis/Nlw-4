import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const hasActiveChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>

            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe 400 xp
                    </header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button
                         type="button"
                         className={styles.challengeFailedButton}
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