import { MouseEventHandler } from 'react';
import { Color, Genero, Talla } from '../constants/';

// export interface CarProps {
//   city_mpg: number;
//   class: string;
//   combination_mpg: number;
//   cylinders: number;
//   displacement: number;
//   drive: string;
//   fuel_type: string;
//   highway_mpg: number;
//   make: string;
//   model: string;
//   transmission: string;
//   year: number;
// }

// export interface FilterProps {
//   manufacturer?: string;
//   year?: number;
//   model?: string;
//   limit?: number;
//   fuel?: string;
// }

export interface PrendasProps {
  nombre: string;
  descripcion?: string;
  precio?: number;
  categoria?: string;
  subcategoria?: string;
  marca?: string;
  talla?: Talla;
  color?: Color;
  material?: string;
  genero?: Genero;
  imagen: string;
  inventario?: number;
  promocion?: {
    tipo: string;
    porcentaje: number;
  };
  calificacion?: number;
  caracteristicas?: string[];
}

export interface FilterPrendas {
  precio?: number;
  categoria?: string;
  subcategoria?: string;
  marca?: string;
  talla?: Talla;
  color?: Color;
  material?: string;
  genero?: Genero;
  promocion?: {
    tipo: string;
    porcentaje: number;
  };
  limit?: number;
}

export interface HomeProps {
  searchParams: FilterPrendas;
}

export interface PrendasCardProps {
  nombre: string;
  precio?: number;
  marca?: string;
  talla?: Talla;
  color?: Color;
  imagen: string;
}

// export interface CarCardProps {
//   model: string;
//   make: string;
//   mpg: number;
//   transmission: string;
//   year: number;
//   drive: string;
//   cityMPG: number;
// }

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
