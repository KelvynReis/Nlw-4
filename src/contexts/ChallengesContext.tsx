import { createContext, useState, ReactNode, useEffect} from 'react';
import Cookie from 'js-cookie';
import challenges from '../../challenges.json';

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface ChallengesContextData{
    level: number;
    currentExperience: number;
    experienceToNextlevel: number;
    activeChallenge: Challenge;
    challengesCompleted: number;
    Levelup: () => void;
    startNewChallenge: () => void;
    resetChallenges: () => void;
    completedChallenge: () => void;
}

interface ChallengesProviderPros{
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData );

export function ChallengesProvider({ children, ...rest }: ChallengesProviderPros ) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] =useState(null);

    const experienceToNextlevel = Math.pow((level + 1) * 4 , 2);

    useEffect( ()=>{
        Notification.requestPermission();
    }, [])

    useEffect( () =>{
        Cookie.set('level', String(level));
        Cookie.set('currentExperience', String(currentExperience) );
        Cookie.set('challengesCompleted', String(challengesCompleted) );
    }, [ level, currentExperience, challengesCompleted]);


    function Levelup(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const radonChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[radonChallengeIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}XP!`
            });
        }
    }

    function resetChallenges(){
        setActiveChallenge(null);
    }

    function completedChallenge(){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;

        let finalExperiece = currentExperience + amount;

        if(finalExperiece >= experienceToNextlevel){
            finalExperiece = finalExperiece- experienceToNextlevel;
            Levelup();
        }

        setCurrentExperience(finalExperiece);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider
         value={{
                    level,
                    currentExperience,
                    experienceToNextlevel,
                    challengesCompleted,
                    Levelup,
                    activeChallenge,
                    startNewChallenge,
                    resetChallenges,
                    completedChallenge,
                    
                }}
            >
                { children }
        </ChallengesContext.Provider>
    );
}
