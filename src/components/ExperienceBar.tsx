import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience, experienceToNextlevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextlevel

    return(
        <header className={styles.experienceBar}>
            <span>0 px</span>
                <div>
                    <div style={{ width: `${percentToNextLevel}%`}}/>

                    <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                        {currentExperience}xp
                    </span>
                </div>
            <span>{experienceToNextlevel} xp</span>
        </header>
    );
}