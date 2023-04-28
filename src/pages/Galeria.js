import React from 'react';
import Nav from '../components/Nav';


const Galeria = () => {
  return (
    <>
    <Nav />
    <div className="min-h-screen">
     <main className="py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            GALERIA
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Aquí encontrarás toda la información que necesitas sobre mi proyecto.
          </p>
        </div>
      </main>
    </div>
    </>
  );
};

export default Galeria;
