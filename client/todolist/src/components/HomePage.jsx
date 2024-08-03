import React from 'react'
import {useNavigate} from 'react-router-dom'
const  HomePage = () =>{
    let navigate = useNavigate()
    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }
    return(
        <div>
             <h1>Welcome</h1>
            <button onClick={handleLogout}> Logout</button>
        </div>
        
    )
}

export default HomePage