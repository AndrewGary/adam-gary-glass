import { useEffect, useState } from "react"
import AdminDashboard from "./components/AdminDashboard"
import UserDashboard from "./components/UserDashboard"

import { useAuth0 } from "@auth0/auth0-react"

const Dashboard = props =>{

    const [ dashboard, setDashboard ] = useState()

    const { user } = props;

    //checks to see if admin or user is logged in and sets the dashboard state to corresponding dashboard
    useEffect(() => {
        if(user){
            if(user.name === 'adamgaryglass@gmail.com'){
                setDashboard(<AdminDashboard user={user}/>)
            }else{
                setDashboard(<UserDashboard user={user}/>)
            }
        }else{
            setDashboard(<div>Loading</div>)
        }

    }, [user])

    return(
        <div>
            {dashboard}
        </div>
    )
}

export default Dashboard