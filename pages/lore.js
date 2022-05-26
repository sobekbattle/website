import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/Footer";

const Lore = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <div className='font-bold text-4xl text-center justify-center mb-2'>Lore</div>
    <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    <div className='max-w-lg mx-auto px-4 sm:px-6 lg:px-8" rounded overflow-hidden shadow-lg my-2'>
    
        <div className='px-6 py-4'>
        
        <div className='text-grey-darker text-base'>
        In ancient times, a great beast walked the Earth with men. These hulking beasts were surprisingly friendly and devoted to anyone who fed them.</div>
        <img
          className='w-full'
          src="/sobekPurple.jpg"
          alt='Sunset in the mountains'
        />
        <div className='text-grey-darker text-base'>
        And fed them they did for they were always hungry. Many across the ancient lands began to worship the beasts as the God of Hunger and named him Sobek.</div>
        </div>
    </div>
    <div className='max-w-lg mx-auto px-4 sm:px-6 lg:px-8" rounded overflow-hidden shadow-lg my-2'>
    
        <div className='px-6 py-4'>
        
        <div className='text-grey-darker text-base'>
        The Sobeki, or trainers, learned early on that the beast would gladly compete for gold, gems and baubles. Thus the Great Sobek Battles were born.</div>
        <img
          className='w-full'
          src="/sobekSketch.jpg"
          alt='Sunset in the mountains'
        />
        <div className='text-grey-darker text-base'>
        Tournaments of epic proportions for gold and glory were held all through out the ancient lands. Until one day, the Sobek disappeared. </div>
        
        </div>
    </div>
    <div className='max-w-lg mx-auto px-4 sm:px-6 lg:px-8" rounded overflow-hidden shadow-lg my-2'>
    
        <div className='px-6 py-4'>
        
        <div className='text-grey-darker text-base'>
        They entered a long, deep hibernation to sleep off their excesses in thousand year long food comma. There are new rumblings and grumblings. </div>
        <img
          className='w-full'
          src="/sobekBlue.png"
          alt='Sunset in the mountains'
        />
        <div className='text-grey-darker text-base'>
        Some can hear it and know what opportunities await for those who learn the ways of the Sobeki and prepare for The Great Sobek Battles.</div>
        </div>
    </div>
    
    </div>
    <Footer />
  </div>
  
    
);

export default Lore;