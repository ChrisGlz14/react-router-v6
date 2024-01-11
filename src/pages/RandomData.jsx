import React, { useEffect, useState } from "react";

export const RandomData = () => {
    
    const [userData, setUserData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://random-data-api.com/api/v2/users?size=10";
                const res = await fetch(url)
                const data = await res.json()
                setUserData(data);
            } catch (error) {
                console.log("Ha fallado la peticion")
                return
            }
        };

        fetchData()
        
    }, [])
    

  
  

  return (
    <>
      <h1>Consumiendo Api falsa</h1>
      <ul>
        {userData.map((userData)=>(<li key={userData.id}>{userData.employment.title}</li>))}
      </ul>
    </>
  );
};
