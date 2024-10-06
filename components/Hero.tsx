'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-14 padding-x italic">
        <h1 className="hero__title">Tienda de Ropa Deportiva y Urbana</h1>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/logo.png"
            alt="hero"
            fill
            className="object-contain backdrop-invert-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
