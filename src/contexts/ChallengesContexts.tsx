import { createContext, useState, ReactNode} from 'react';


interface ChallangesContextData{
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    Levelup: () => void,
    startNewChallenge: () => void;
}

interface ChallengesProviderPros{
    children: ReactNode;
}

export const ChallengesContexts = createContext({} as ChallangesContextData );

export function ChallengesProvider({ children }: ChallengesProviderPros ) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function Levelup(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        console.log('New challenge');
    }

    return (
        <ChallengesContexts.Provider
         value={{
                    level,
                    currentExperience,
                    challengesCompleted,
                    Levelup,
                    startNewChallenge
                }}
            >
                { children }
        </ChallengesContexts.Provider>
    );
}
