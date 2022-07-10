import React, { useState, useEffect } from "react";
import WelcomeMessage from "../../components/WelcomeMessage";
import CheckIfOfAge from "../../components/CheckIfOfAge";
import PromoSection from "./components/PromoSection";
import AddToEmailList from "./components/AddToEmailList";

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
        <div className="flex flex-col items-center h-screen ">
            <WelcomeMessage />
            <PromoSection />
            <AddToEmailList />
        </div> : 
        <CheckIfOfAge setOfAge={setOfAge}/>
        }
        </>
    )
}

export default LandingPage;