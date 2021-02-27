import { createContext, useState, ReactNode} from 'react';
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
}

interface ChallengesProviderPros{
    children: ReactNode;
}

export const ChallengesContexts = createContext({} as ChallengesContextData );

export function ChallengesProvider({ children }: ChallengesProviderPros ) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] =useState(null);

    const experienceToNextlevel = Math.pow((level + 1) * 4 , 2);

    function Levelup(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const radonChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[radonChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenges(){
        setActiveChallenge(null);
    }

    return (
        <ChallengesContexts.Provider
         value={{
                    level,
                    currentExperience,
                    experienceToNextlevel,
                    challengesCompleted,
                    Levelup,
                    activeChallenge,
                    startNewChallenge,
                    resetChallenges,
                }}
            >
                { children }
        </ChallengesContexts.Provider>
    );
}
