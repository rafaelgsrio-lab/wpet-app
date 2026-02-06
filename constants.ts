
import { Product, PetType, Gender } from './types';

export const COLORS = {
  primary: '#14b8a6', // Teal
  secondary: '#f43f5e', // Rose
  accent: '#0ea5e9', // Sky Blue
  dark: '#1e293b',
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Roupa Pós-Cirúrgica Tradicional',
    image: 'https://picsum.photos/seed/wpet1/600/600',
    description: 'Indicado para proteção pós-cirúrgica e uso ortopédico, respeitando o conforto e a mobilidade do seu pet.'
  },
  {
    id: '2',
    name: 'Roupa Ortopédica Especial',
    image: 'https://picsum.photos/seed/wpet2/600/600',
    description: 'Indicado para proteção pós-cirúrgica e uso ortopédico, respeitando o conforto e a mobilidade do seu pet.'
  },
  {
    id: '3',
    name: 'Protetor de Patas Pós-Operatório',
    image: 'https://picsum.photos/seed/wpet3/600/600',
    description: 'Indicado para proteção pós-cirúrgica e uso ortopédico, respeitando o conforto e a mobilidade do seu pet.'
  }
];

export const WHATSAPP_NUMBER = '+5524992618871';
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo aplicativo da WPet e gostaria de informações sobre roupas pós-cirúrgicas para meu pet.';

export const calculateSize = (type: PetType, weight: number): string => {
  if (type === 'Gato') {
    if (weight < 1.5) return '00';
    if (weight < 2.5) return '0';
    if (weight < 3.5) return '1';
    if (weight < 5.0) return '2';
    if (weight < 7.0) return '3';
    return '4';
  } else {
    // Dog sizes
    if (weight < 2.0) return '00';
    if (weight < 3.0) return '0';
    if (weight < 4.0) return '1';
    if (weight < 6.0) return '2';
    if (weight < 8.0) return '3';
    if (weight < 10.0) return '4';
    if (weight < 13.0) return '5';
    if (weight < 16.0) return '6';
    if (weight < 20.0) return '7';
    if (weight < 25.0) return '8';
    if (weight < 30.0) return '9';
    if (weight < 35.0) return '10';
    if (weight < 40.0) return '11';
    return '12';
  }
};
