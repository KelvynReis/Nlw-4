import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
    seconds: number;
    minutes: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown:()=> void;
    resetCountdowm: ()=> void;

}

interface CountdownProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({}as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children}: CountdownProviderProps){

    const { startNewChallenge }= useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdowm(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.1 * 60);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])
    

    return(
        <CountdownContext.Provider value={{
            seconds,
            minutes,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdowm
        }}>
            {children}
        </CountdownContext.Provider>
    );
}