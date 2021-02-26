import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.ProfileContainer}>
            <img src="https://github.com/Sogeking07.png" alt="Kelvyn Reis"/>
            <div>
                <strong>Kelvyn Reis</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}