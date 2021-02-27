import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){

    const { challengesCompleted} = useContext(ChallengesContexts)

    return(
        <div className={styles.completedeChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}