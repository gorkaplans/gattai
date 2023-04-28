import '../index.css';
import React from 'react';
import Nav from '../components/Nav';
import HeaderHome from '../components/HeaderHome';
import GalleryGrid from '../components/GalleryGrid';

function HomePage() {
  return (
    <>
      <Nav />
      <HeaderHome />
      <div className="min-h-screen">
        <main className="py-2 lg:py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center">
              <div className="flex  w-full">
                <h1 className='text-blue-gattai font-larken text-xl lg:text-3xl'>Los detalles que harán de la boda, TU boda.</h1>
              </div>
              <div className="flex w-full mt-4">
                <p className='ml-auto text-blue-gattai font-larken font-thin text-xl lg:text-3xl'>Diseño gráfico integral para bodas </p>
              </div>
            </div>
            <GalleryGrid gallery='home' />
          </div>
         
        </main>
      </div>
    </>
  );
}

export default HomePage;
