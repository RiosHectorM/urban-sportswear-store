'use client';

import { useState } from 'react';
import Image from 'next/image';

//import { calculateCarRent, generateCarImageUrl } from "@utils";
import { PrendasProps } from '@types';
import CustomButton from './CustomButton';
//import CarDetails from './ClothesDetails';
import ClothesDetails from './ClothesDetails';

interface PrendasCardProps {
  clothes: PrendasProps;
}

const ClothesCard = ({ clothes }: PrendasCardProps) => {
  const { nombre, precio, marca, talla, color, imagen } = clothes;

  const [isOpen, setIsOpen] = useState(false);

  //const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{nombre}</h2>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={'/hero4.png'}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="flex w-full justify-end">
        <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
          $ {precio}
        </p>
      </div>

      <div className="relative flex w-full mt-2">
        {/* <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
               {transmission === 'a' ? 'Automatic' : 'Manual'} 
              {talla}
            </p>
          </div>
           <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div> 
        </div> */}

        <div className="car-card__btn-container">
          <CustomButton
            title="VER"
            containerStyles="w-1/2 py-[16px] rounded-full bg-primary-blue border-2 border-black"
            textStyles="text-white text-sm font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <ClothesDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        clothes={clothes}
      />
    </div>
  );
};

export default ClothesCard;
