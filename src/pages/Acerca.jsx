import React from "react";

export const Acerca = () => {
  const fakeApiDatas = [
    { id: 1, name: "Juan", age: 25, email: "juan@example.com" },
    { id: 2, name: "María", age: 30, email: "maria@example.com" },
    { id: 3, name: "Carlos", age: 28, email: "carlos@example.com" },
    { id: 4, name: "Ana", age: 22, email: "ana@example.com" },
    { id: 5, name: "Pedro", age: 35, email: "pedro@example.com" },
  ];

  return (
    <>
      <h1 className="text-center text-2xl mt-5">Acerca de nosotros</h1>;
      <h1 className="text-center text-2xl mt-5">Nuestro email es:</h1>
      <ul className="text-center text-2xl mt-5">
        {fakeApiDatas.map((fakeApiData)=>(<li key={fakeApiData.id}>{fakeApiData.name}</li>))}
      </ul>
      <hr />
      <h1 className="text-center text-2xl mt-5">Nuestros Mail son:</h1>
      <ul className="text-center text-2xl mt-5">
        {fakeApiDatas.map((fakeApiData) => (
          <li key={fakeApiData.id}>{fakeApiData.email}</li>
        ))}
      </ul>
      <hr />  
      <h1 className="text-center text-2xl mt-5">Nuestra edad es:</h1>
      <ul className="text-center text-2xl mt-5">
        {fakeApiDatas.map((fakeApiData) => (
          <li key={fakeApiData.id}>{fakeApiData.age}</li>
        ))}
      </ul>
    </>
  );
};
