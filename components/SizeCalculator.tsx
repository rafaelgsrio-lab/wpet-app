
import React, { useState } from 'react';
import { PetType, Gender } from '../types';
import { calculateSize, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const SizeCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [petType, setPetType] = useState<PetType | null>(null);
  const [gender, setGender] = useState<Gender | null>(null);
  const [weight, setWeight] = useState<string>('');

  const resultSize = petType && weight ? calculateSize(petType, parseFloat(weight)) : null;

  const reset = () => {
    setStep(1);
    setPetType(null);
    setGender(null);
    setWeight('');
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-teal-50">
        <h2 className="text-3xl font-extrabold text-teal-600 mb-2 text-center">Escolher Tamanho Ideal</h2>
        <p className="text-gray-500 text-center mb-8">Defina a roupa perfeita para seu pet em 3 passos simples.</p>

        {/* Progress Bar */}
        <div className="flex justify-between mb-10 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-teal-500 -translate-y-1/2 z-0 transition-all duration-300"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s} 
              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 font-bold transition-all ${
                s <= step ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-400'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-center">Seu pet é:</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => { setPetType('Cão'); setStep(2); }}
                className="flex flex-col items-center justify-center p-6 border-2 rounded-2xl hover:border-teal-400 hover:bg-teal-50 transition-all group"
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">🐶</span>
                <span className="font-bold text-gray-700">Cão</span>
              </button>
              <button
                onClick={() => { setPetType('Gato'); setStep(2); }}
                className="flex flex-col items-center justify-center p-6 border-2 rounded-2xl hover:border-teal-400 hover:bg-teal-50 transition-all group"
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">🐱</span>
                <span className="font-bold text-gray-700">Gato</span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-center">Sexo do pet:</h3>
            <p className="text-sm text-gray-500 mb-6 text-center italic">
              As roupas da WPet possuem design específico para machos e fêmeas, respeitando as necessidades fisiológicas de cada animal.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => { setGender('Macho'); setStep(3); }}
                className="flex flex-col items-center justify-center p-6 border-2 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all group"
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">♂️</span>
                <span className="font-bold text-gray-700">Macho</span>
              </button>
              <button
                onClick={() => { setGender('Fêmea'); setStep(3); }}
                className="flex flex-col items-center justify-center p-6 border-2 rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all group"
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">♀️</span>
                <span className="font-bold text-gray-700">Fêmea</span>
              </button>
            </div>
            <button onClick={() => setStep(1)} className="text-teal-600 font-medium w-full text-center">← Voltar</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-center">Informe o peso do seu pet (em kg):</h3>
            <div className="flex flex-col items-center gap-6">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ex: 5.5"
                className="w-full max-w-xs text-center text-3xl font-bold p-4 border-b-4 border-teal-500 bg-transparent focus:outline-none"
                autoFocus
              />
              <button
                disabled={!weight || parseFloat(weight) <= 0}
                onClick={() => setStep(4)}
                className="bg-teal-500 text-white px-10 py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-xs shadow-lg shadow-teal-100 hover:bg-teal-600 transition-all"
              >
                Ver Resultado
              </button>
              <button onClick={() => setStep(2)} className="text-teal-600 font-medium">← Voltar</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              ✅
            </div>
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2">Tamanho Recomendado: {resultSize}</h3>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Este tamanho é indicado para um <strong>{petType?.toLowerCase()}</strong>, <strong>{gender?.toLowerCase()}</strong>, com peso aproximado de <strong>{weight}kg</strong>, garantindo conforto, mobilidade e proteção adequada.
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-600 transition-all flex items-center justify-center gap-3"
              >
                <span>🛒 Comprar este tamanho agora</span>
              </button>
              
              <p className="text-xs text-gray-400 mt-4 px-4">
                Em caso de dúvida entre dois tamanhos, fale conosco pelo WhatsApp para orientação personalizada.
              </p>
              
              <button
                onClick={reset}
                className="text-teal-600 font-bold underline"
              >
                Refazer cálculo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SizeCalculator;
