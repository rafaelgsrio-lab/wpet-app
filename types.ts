
export enum Screen {
  HOME = 'home',
  CATALOG = 'catalog',
  CALCULATOR = 'calculator',
  ABOUT = 'about'
}

export type PetType = 'Cão' | 'Gato';
export type Gender = 'Macho' | 'Fêmea';

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface SizeResult {
  size: string;
  description: string;
}
