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
      <h1 className="text-center text-2xl mt-5 bg-slate-500 text-white">Consumiendo Api falsa</h1>
      <ul className="text-center text-2xl mt-5">
        {userData.map((userData)=>(<li className="mt-8" key={userData.id}>{userData.employment.title}</li>))}
      </ul>
    </>
  );
};
