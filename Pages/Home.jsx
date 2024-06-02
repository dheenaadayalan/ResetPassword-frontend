import React, { useEffect, useState } from 'react';
import axios from "axios";

function Home({userEmail}) {
    const user = userEmail;
    const values = {"userEmail":user}
    
    const [data,setData] = useState()

    const fetchData = async ()=>{
        console.log(user);
        await axios 
        .post('https://day-41-backend-xc88.onrender.com/api/get/user/data',values)
        .then((res)=>{
            console.log(res.data.data);
            setData(res.data.data)
        })
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <>
           <h1>Loged-in</h1>
           
        </>
    );
}

export default Home;