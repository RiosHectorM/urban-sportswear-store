'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-14 padding-x ">
        <h1 className="hero__title">Tienda de Ropa Deportiva y Urbana</h1>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero2.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay " />
      </div>
    </div>
  );
};

export default Hero;
