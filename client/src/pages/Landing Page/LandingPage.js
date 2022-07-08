import React, { useState, useEffect } from "react";
import WelcomeMessage from "../../components/WelcomeMessage";
import CheckIfOfAge from "../../components/CheckIfOfAge";

const LandingPage = () => {

    const [ ofAge, setOfAge ] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('ofAge')){
            setOfAge(true);
        }
    }, [])

    return (
        <>
        
        {ofAge ? 
        <div className="flex flex-col items-center border border-red-500 h-screen ">
            <WelcomeMessage />
        </div> : 
        <CheckIfOfAge setOfAge={setOfAge}/>
        }
        </>
    )
}

export default LandingPage;