
import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const WhatsAppFAB: React.FC = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-105 active:scale-95 group"
    >
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.26.405 2.455 1.156 3.44l-.754 2.27 2.32-.736c.943.593 2.043.91 3.167.91 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.387 8.264c-.147.415-.852.795-1.177.85-.325.054-.725.1-2.125-.45-1.7-.675-2.775-2.425-2.85-2.55-.075-.125-.65-.875-.65-1.675 0-.8.425-1.2.575-1.375.15-.175.325-.225.425-.225h.3c.1 0 .225-.025.35.275.125.3.425 1.05.475 1.15.05.1.075.225 0 .375-.075.15-.15.25-.275.4-.125.15-.25.325-.375.45-.125.125-.25.25-.1.5.15.25.65 1.075 1.4 1.725.95.825 1.75 1.075 2.025 1.2.275.125.425.1.575-.075.15-.175.675-.775.85-1.05.175-.275.35-.225.6-.125.25.1 1.575.75 1.85.875.275.125.45.2.525.325.075.125.075.725-.225 1.15z" />
      </svg>
      <span className="font-bold text-sm md:text-base">Pedir pelo WhatsApp</span>
    </button>
  );
};

export default WhatsAppFAB;
