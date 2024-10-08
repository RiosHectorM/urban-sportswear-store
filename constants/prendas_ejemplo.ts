import { PrendasProps } from '@types';
import { Talla, Color, Genero } from '@constants';

export const prendasEjemplo: PrendasProps[] = [
  {
    nombre: 'Camiseta básica',
    descripcion: 'Camiseta de algodón suave y cómoda.',
    precio: 19499,
    categoria: 'Camisetas',
    subcategoria: 'Básicas',
    marca: 'Nike',
    talla: Talla.M,
    color: Color.Blanco,
    material: 'Algodón',
    genero: Genero.Masculino,
    imagen: 'https://http2.mlstatic.com/D_807231-MLA50448492963_062022-O.jpg',
    inventario: 50,
    caracteristicas: ['Manga corta', 'Cuello redondo'],
  },
  {
    nombre: 'Vestido floral',
    descripcion: 'Vestido ligero y femenino con estampado floral.',
    precio: 4339.99,
    categoria: 'Vestidos',
    subcategoria: 'Verano',
    marca: 'Zara',
    talla: Talla.S,
    color: Color.AzulCeleste,
    material: 'Viscosa',
    genero: Genero.Femenino,
    imagen:
      'https://acdn.mitiendanube.com/stores/830/660/products/zt-0856-frente1-c4888add00ccd855ae16324278396152-1024-1024.jpg',
    inventario: 20,
    caracteristicas: ['Escote en V', 'Cinturilla elástica'],
  },
  {
    nombre: 'Pantalón jeans clásico',
    descripcion: 'Pantalón vaquero de corte recto y tiro alto.',
    precio: 43669.99,
    categoria: 'Pantalones',
    subcategoria: 'Jeans',
    marca: "Levi's",
    talla: Talla.M,
    color: Color.Azul,
    material: 'Denim',
    genero: Genero.Unisex,
    imagen:
      'https://acdn.mitiendanube.com/stores/402/355/products/pikachu-1c5283b74f45327b5616639552631699-640-0.jpeg',
    inventario: 35,
    caracteristicas: ['Cierre de botón', 'Bolsillos delanteros y traseros'],
  },
  {
    nombre: 'Sudadera deportiva',
    descripcion: 'Sudadera de algodón con capucha y bolsillo canguro.',
    precio: 19939.99,
    categoria: 'Camisetas',
    subcategoria: 'Deportivas',
    marca: 'Adidas',
    talla: Talla.L,
    color: Color.Gris,
    material: 'Algodón',
    genero: Genero.Masculino,
    imagen:
      'https://acdn.mitiendanube.com/stores/990/663/products/1311-8203a3f606223c66f015966256451153-1024-1024.jpg',
    inventario: 15,
    caracteristicas: ['Puños y bajo elásticos', 'Logo bordado'],
  },
  {
    nombre: 'Chaqueta de cuero',
    descripcion: 'Chaqueta de cuero auténtica con cierre asimétrico.',
    precio: 2979.99,
    categoria: 'Chaquetas',
    subcategoria: 'Cuero',
    marca: 'Harley Davidson',
    talla: Talla.XL,
    color: Color.Negro,
    material: 'Cuero',
    genero: Genero.Masculino,
    imagen:
      'https://dcdn.mitiendanube.com/stores/002/360/580/products/pokemonml21-f1002579af28e03a7d16696435031863-640-0.jpg',
    inventario: 8,
    caracteristicas: ['Bolsillos interiores', 'Detalles metálicos'],
  },
  {
    nombre: 'Falda midi plisada',
    descripcion: 'Falda midi plisada con cintura alta y vuelo amplio.',
    precio: 34.99,
    categoria: 'Faldas',
    subcategoria: 'Midi',
    marca: 'Mango',
    talla: Talla.S,
    color: Color.Rosa,
    material: 'Poliester',
    genero: Genero.Femenino,
    imagen:
      'https://www.tiendafacil.com.ar/tienda/uploads/600x600/1691697871_d4bea3a2.jpg',
    inventario: 12,
    caracteristicas: ['Cintura elástica', 'Forro interior'],
  },
  {
    nombre: 'Traje de baño de una pieza',
    descripcion:
      'Traje de baño de una pieza con escote en V y espalda descubierta.',
    precio: 29555,
    categoria: 'Bañadores',
    subcategoria: 'Una pieza',
    marca: 'Calzedonia',
    talla: Talla.M,
    color: Color.AzulMarino,
    material: 'Lycra',
    genero: Genero.Femenino,
    imagen:
      'https://ideasmvd.com.uy/wp-content/uploads/2023/10/pokemon-03-rojo-ideas-mvd.jpg',
    inventario: 7,
    caracteristicas: ['Relleno extraíble', 'Protección UV'],
  },
  {
    nombre: 'Camiseta básica',
    descripcion: 'Camiseta de algodón suave y cómoda.',
    precio: 19499,
    categoria: 'Camisetas',
    subcategoria: 'Básicas',
    marca: 'Nike',
    talla: Talla.M,
    color: Color.Blanco,
    material: 'Algodón',
    genero: Genero.Masculino,
    imagen: 'https://http2.mlstatic.com/D_807231-MLA50448492963_062022-O.jpg',
    inventario: 50,
    caracteristicas: ['Manga corta', 'Cuello redondo'],
  },
  {
    nombre: 'Vestido floral',
    descripcion: 'Vestido ligero y femenino con estampado floral.',
    precio: 4339.99,
    categoria: 'Vestidos',
    subcategoria: 'Verano',
    marca: 'Zara',
    talla: Talla.S,
    color: Color.AzulCeleste,
    material: 'Viscosa',
    genero: Genero.Femenino,
    imagen:
      'https://acdn.mitiendanube.com/stores/830/660/products/zt-0856-frente1-c4888add00ccd855ae16324278396152-1024-1024.jpg',
    inventario: 20,
    caracteristicas: ['Escote en V', 'Cinturilla elástica'],
  },
  {
    nombre: 'Pantalón jeans clásico',
    descripcion: 'Pantalón vaquero de corte recto y tiro alto.',
    precio: 43669.99,
    categoria: 'Pantalones',
    subcategoria: 'Jeans',
    marca: "Levi's",
    talla: Talla.M,
    color: Color.Azul,
    material: 'Denim',
    genero: Genero.Unisex,
    imagen:
      'https://acdn.mitiendanube.com/stores/402/355/products/pikachu-1c5283b74f45327b5616639552631699-640-0.jpeg',
    inventario: 35,
    caracteristicas: ['Cierre de botón', 'Bolsillos delanteros y traseros'],
  },
  {
    nombre: 'Sudadera deportiva',
    descripcion: 'Sudadera de algodón con capucha y bolsillo canguro.',
    precio: 19939.99,
    categoria: 'Camisetas',
    subcategoria: 'Deportivas',
    marca: 'Adidas',
    talla: Talla.L,
    color: Color.Gris,
    material: 'Algodón',
    genero: Genero.Masculino,
    imagen:
      'https://acdn.mitiendanube.com/stores/990/663/products/1311-8203a3f606223c66f015966256451153-1024-1024.jpg',
    inventario: 15,
    caracteristicas: ['Puños y bajo elásticos', 'Logo bordado'],
  },
  {
    nombre: 'Chaqueta de cuero',
    descripcion: 'Chaqueta de cuero auténtica con cierre asimétrico.',
    precio: 2979.99,
    categoria: 'Chaquetas',
    subcategoria: 'Cuero',
    marca: 'Harley Davidson',
    talla: Talla.XL,
    color: Color.Negro,
    material: 'Cuero',
    genero: Genero.Masculino,
    imagen:
      'https://dcdn.mitiendanube.com/stores/002/360/580/products/pokemonml21-f1002579af28e03a7d16696435031863-640-0.jpg',
    inventario: 8,
    caracteristicas: ['Bolsillos interiores', 'Detalles metálicos'],
  },
  {
    nombre: 'Falda midi plisada',
    descripcion: 'Falda midi plisada con cintura alta y vuelo amplio.',
    precio: 34.99,
    categoria: 'Faldas',
    subcategoria: 'Midi',
    marca: 'Mango',
    talla: Talla.S,
    color: Color.Rosa,
    material: 'Poliester',
    genero: Genero.Femenino,
    imagen:
      'https://www.tiendafacil.com.ar/tienda/uploads/600x600/1691697871_d4bea3a2.jpg',
    inventario: 12,
    caracteristicas: ['Cintura elástica', 'Forro interior'],
  },
  {
    nombre: 'Traje de baño de una pieza',
    descripcion:
      'Traje de baño de una pieza con escote en V y espalda descubierta.',
    precio: 29555,
    categoria: 'Bañadores',
    subcategoria: 'Una pieza',
    marca: 'Calzedonia',
    talla: Talla.M,
    color: Color.AzulMarino,
    material: 'Lycra',
    genero: Genero.Femenino,
    imagen:
      'https://ideasmvd.com.uy/wp-content/uploads/2023/10/pokemon-03-rojo-ideas-mvd.jpg',
    inventario: 7,
    caracteristicas: ['Relleno extraíble', 'Protección UV'],
  },
  {
    nombre: 'Camiseta básica',
    descripcion: 'Camiseta de algodón suave y cómoda.',
    precio: 19499,
    categoria: 'Camisetas',
    subcategoria: 'Básicas',
    marca: 'Nike',
    talla: Talla.M,
    color: Color.Blanco,
    material: 'Algodón',
    genero: Genero.Masculino,
    imagen: 'https://http2.mlstatic.com/D_807231-MLA50448492963_062022-O.jpg',
    inventario: 50,
    caracteristicas: ['Manga corta', 'Cuello redondo'],
  },
  {
    nombre: 'Vestido floral',
    descripcion: 'Vestido ligero y femenino con estampado floral.',
    precio: 4339.99,
    categoria: 'Vestidos',
    subcategoria: 'Verano',
    marca: 'Zara',
    talla: Talla.S,
    color: Color.AzulCeleste,
    material: 'Viscosa',
    genero: Genero.Femenino,
    imagen:
      'https://acdn.mitiendanube.com/stores/830/660/products/zt-0856-frente1-c4888add00ccd855ae16324278396152-1024-1024.jpg',
    inventario: 20,
    caracteristicas: ['Escote en V', 'Cinturilla elástica'],
  },
  {
    nombre: 'Pantalón jeans clásico',
    descripcion: 'Pantalón vaquero de corte recto y tiro alto.',
    precio: 43669.99,
    categoria: 'Pantalones',
    subcategoria: 'Jeans',
    marca: "Levi's",
    talla: Talla.M,
    color: Color.Azul,
    material: 'Denim',
    genero: Genero.Unisex,
    imagen:
      'https://acdn.mitiendanube.com/stores/402/355/products/pikachu-1c5283b74f45327b5616639552631699-640-0.jpeg',
    inventario: 35,
    caracteristicas: ['Cierre de botón', 'Bolsillos delanteros y traseros'],
  },
  {
    nombre: 'Sudadera deportiva',
    descripcion: 'Sudadera de algodón con capucha y bolsillo canguro.',
    precio: 19939.99,
    categoria: 'Camisetas',
    subcategoria: 'Deportivas',
    marca: 'Adidas',
    talla: Talla.L,
    color: Color.Gris,
    material: 'Algodón',
    genero: Genero.Masculino,
    imagen:
      'https://acdn.mitiendanube.com/stores/990/663/products/1311-8203a3f606223c66f015966256451153-1024-1024.jpg',
    inventario: 15,
    caracteristicas: ['Puños y bajo elásticos', 'Logo bordado'],
  },
  {
    nombre: 'Chaqueta de cuero',
    descripcion: 'Chaqueta de cuero auténtica con cierre asimétrico.',
    precio: 2979.99,
    categoria: 'Chaquetas',
    subcategoria: 'Cuero',
    marca: 'Harley Davidson',
    talla: Talla.XL,
    color: Color.Negro,
    material: 'Cuero',
    genero: Genero.Masculino,
    imagen:
      'https://dcdn.mitiendanube.com/stores/002/360/580/products/pokemonml21-f1002579af28e03a7d16696435031863-640-0.jpg',
    inventario: 8,
    caracteristicas: ['Bolsillos interiores', 'Detalles metálicos'],
  },
  {
    nombre: 'Falda midi plisada',
    descripcion: 'Falda midi plisada con cintura alta y vuelo amplio.',
    precio: 34.99,
    categoria: 'Faldas',
    subcategoria: 'Midi',
    marca: 'Mango',
    talla: Talla.S,
    color: Color.Rosa,
    material: 'Poliester',
    genero: Genero.Femenino,
    imagen:
      'https://www.tiendafacil.com.ar/tienda/uploads/600x600/1691697871_d4bea3a2.jpg',
    inventario: 12,
    caracteristicas: ['Cintura elástica', 'Forro interior'],
  },
  {
    nombre: 'Traje de baño de una pieza',
    descripcion:
      'Traje de baño de una pieza con escote en V y espalda descubierta.',
    precio: 29555,
    categoria: 'Bañadores',
    subcategoria: 'Una pieza',
    marca: 'Calzedonia',
    talla: Talla.M,
    color: Color.AzulMarino,
    material: 'Lycra',
    genero: Genero.Femenino,
    imagen:
      'https://ideasmvd.com.uy/wp-content/uploads/2023/10/pokemon-03-rojo-ideas-mvd.jpg',
    inventario: 7,
    caracteristicas: ['Relleno extraíble', 'Protección UV'],
  },
  {
    nombre: 'Camiseta básica',
    descripcion: 'Camiseta de algodón suave y cómoda.',
    precio: 19499,
    categoria: 'Camisetas',
    subcategoria: 'Básicas',
    marca: 'Nike',
    talla: Talla.M,
    color: Color.Blanco,
    material: 'Algodón',
    genero: Genero.Masculino,
    imagen: 'https://http2.mlstatic.com/D_807231-MLA50448492963_062022-O.jpg',
    inventario: 50,
    caracteristicas: ['Manga corta', 'Cuello redondo'],
  },
  {
    nombre: 'Vestido floral',
    descripcion: 'Vestido ligero y femenino con estampado floral.',
    precio: 4339.99,
    categoria: 'Vestidos',
    subcategoria: 'Verano',
    marca: 'Zara',
    talla: Talla.S,
    color: Color.AzulCeleste,
    material: 'Viscosa',
    genero: Genero.Femenino,
    imagen:
      'https://acdn.mitiendanube.com/stores/830/660/products/zt-0856-frente1-c4888add00ccd855ae16324278396152-1024-1024.jpg',
    inventario: 20,
    caracteristicas: ['Escote en V', 'Cinturilla elástica'],
  },
  {
    nombre: 'Pantalón jeans clásico',
    descripcion: 'Pantalón vaquero de corte recto y tiro alto.',
    precio: 43669.99,
    categoria: 'Pantalones',
    subcategoria: 'Jeans',
    marca: "Levi's",
    talla: Talla.M,
    color: Color.Azul,
    material: 'Denim',
    genero: Genero.Unisex,
    imagen:
      'https://acdn.mitiendanube.com/stores/402/355/products/pikachu-1c5283b74f45327b5616639552631699-640-0.jpeg',
    inventario: 35,
    caracteristicas: ['Cierre de botón', 'Bolsillos delanteros y traseros'],
  },
  {
    nombre: 'Sudadera deportiva',
    descripcion: 'Sudadera de algodón con capucha y bolsillo canguro.',
    precio: 19939.99,
    categoria: 'Camisetas',
    subcategoria: 'Deportivas',
    marca: 'Adidas',
    talla: Talla.L,
    color: Color.Gris,
    material: 'Algodón',
    genero: Genero.Masculino,
    imagen:
      'https://acdn.mitiendanube.com/stores/990/663/products/1311-8203a3f606223c66f015966256451153-1024-1024.jpg',
    inventario: 15,
    caracteristicas: ['Puños y bajo elásticos', 'Logo bordado'],
  },
  {
    nombre: 'Chaqueta de cuero',
    descripcion: 'Chaqueta de cuero auténtica con cierre asimétrico.',
    precio: 2979.99,
    categoria: 'Chaquetas',
    subcategoria: 'Cuero',
    marca: 'Harley Davidson',
    talla: Talla.XL,
    color: Color.Negro,
    material: 'Cuero',
    genero: Genero.Masculino,
    imagen:
      'https://dcdn.mitiendanube.com/stores/002/360/580/products/pokemonml21-f1002579af28e03a7d16696435031863-640-0.jpg',
    inventario: 8,
    caracteristicas: ['Bolsillos interiores', 'Detalles metálicos'],
  },
  {
    nombre: 'Falda midi plisada',
    descripcion: 'Falda midi plisada con cintura alta y vuelo amplio.',
    precio: 34.99,
    categoria: 'Faldas',
    subcategoria: 'Midi',
    marca: 'Mango',
    talla: Talla.S,
    color: Color.Rosa,
    material: 'Poliester',
    genero: Genero.Femenino,
    imagen:
      'https://www.tiendafacil.com.ar/tienda/uploads/600x600/1691697871_d4bea3a2.jpg',
    inventario: 12,
    caracteristicas: ['Cintura elástica', 'Forro interior'],
  },
  {
    nombre: 'Traje de baño de una pieza',
    descripcion:
      'Traje de baño de una pieza con escote en V y espalda descubierta.',
    precio: 29555,
    categoria: 'Bañadores',
    subcategoria: 'Una pieza',
    marca: 'Calzedonia',
    talla: Talla.M,
    color: Color.AzulMarino,
    material: 'Lycra',
    genero: Genero.Femenino,
    imagen:
      'https://ideasmvd.com.uy/wp-content/uploads/2023/10/pokemon-03-rojo-ideas-mvd.jpg',
    inventario: 7,
    caracteristicas: ['Relleno extraíble', 'Protección UV'],
  },
];
