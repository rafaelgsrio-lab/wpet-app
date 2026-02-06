
import React, { useState } from 'react';
import { Screen } from './types';
import { PRODUCTS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from './constants';
import SizeCalculator from './components/SizeCalculator';
import WhatsAppFAB from './components/WhatsAppFAB';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  const Header = () => (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo(Screen.HOME)}>
        <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-teal-100">
          W
        </div>
        <span className="font-extrabold text-2xl text-teal-600 tracking-tighter">WPET</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <button onClick={() => navigateTo(Screen.CATALOG)} className={`font-semibold ${currentScreen === Screen.CATALOG ? 'text-teal-600' : 'text-gray-500'}`}>Produtos</button>
        <button onClick={() => navigateTo(Screen.CALCULATOR)} className={`font-semibold ${currentScreen === Screen.CALCULATOR ? 'text-teal-600' : 'text-gray-500'}`}>Tamanhos</button>
        <button onClick={() => navigateTo(Screen.ABOUT)} className={`font-semibold ${currentScreen === Screen.ABOUT ? 'text-teal-600' : 'text-gray-500'}`}>Sobre</button>
      </div>
    </nav>
  );

  const BottomNav = () => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-40">
      <button onClick={() => navigateTo(Screen.HOME)} className={`flex flex-col items-center gap-1 ${currentScreen === Screen.HOME ? 'text-teal-600' : 'text-gray-400'}`}>
        <span className="text-xl">🏠</span>
        <span className="text-[10px] font-bold">Início</span>
      </button>
      <button onClick={() => navigateTo(Screen.CATALOG)} className={`flex flex-col items-center gap-1 ${currentScreen === Screen.CATALOG ? 'text-teal-600' : 'text-gray-400'}`}>
        <span className="text-xl">👕</span>
        <span className="text-[10px] font-bold">Produtos</span>
      </button>
      <button onClick={() => navigateTo(Screen.CALCULATOR)} className={`flex flex-col items-center gap-1 ${currentScreen === Screen.CALCULATOR ? 'text-teal-600' : 'text-gray-400'}`}>
        <span className="text-xl">📏</span>
        <span className="text-[10px] font-bold">Tamanhos</span>
      </button>
      <button onClick={() => navigateTo(Screen.ABOUT)} className={`flex flex-col items-center gap-1 ${currentScreen === Screen.ABOUT ? 'text-teal-600' : 'text-gray-400'}`}>
        <span className="text-xl">🐾</span>
        <span className="text-[10px] font-bold">Sobre</span>
      </button>
    </div>
  );

  const HomeScreen = () => (
    <div className="flex flex-col">
      <div className="relative h-[400px] bg-teal-500 overflow-hidden flex items-center justify-center text-center p-8">
        <img src="https://picsum.photos/seed/pethero/1200/600" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" alt="Pets" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">WPet</h1>
          <h2 className="text-xl md:text-2xl font-bold text-teal-50 mb-6 italic">Roupas pós-cirúrgicas e ortopédicas para cães e gatos</h2>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-8">
            Conforto, proteção e cuidado em cada detalhe para a recuperação do seu pet.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 py-12 -mt-12 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => navigateTo(Screen.CATALOG)}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">👕</div>
            <h3 className="font-bold text-xl mb-2">Ver Produtos</h3>
            <p className="text-gray-500 text-sm">Conheça nosso catálogo completo de roupas.</p>
          </button>
          
          <button 
            onClick={() => navigateTo(Screen.CALCULATOR)}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">📏</div>
            <h3 className="font-bold text-xl mb-2">Escolher Tamanho</h3>
            <p className="text-gray-500 text-sm">Calcule o tamanho ideal para seu animal.</p>
          </button>

          <button 
            onClick={openWhatsApp}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">💬</div>
            <h3 className="font-bold text-xl mb-2">Pedir WhatsApp</h3>
            <p className="text-gray-500 text-sm">Fale diretamente com nossa equipe.</p>
          </button>
        </div>
      </div>

      <div className="px-6 py-12 bg-white text-center">
        <h3 className="text-2xl font-extrabold text-gray-800 mb-8">Por que escolher WPet?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <span className="text-3xl">❤️</span>
            <span className="font-bold text-gray-700">Design Anatômico</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-3xl">🛡️</span>
            <span className="font-bold text-gray-700">Proteção Total</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-3xl">🌬️</span>
            <span className="font-bold text-gray-700">Tecido Leve</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-3xl">🚻</span>
            <span className="font-bold text-gray-700">Modelagem Sexo</span>
          </div>
        </div>
      </div>
    </div>
  );

  const CatalogScreen = () => (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-teal-600 mb-4">Nossos Produtos</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Desenvolvidos para oferecer proteção, conforto e segurança no pós-operatório e em tratamentos ortopédicos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-50 flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{product.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {product.description}
              </p>
              <button 
                onClick={openWhatsApp}
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-teal-700 transition-all flex items-center justify-center gap-2"
              >
                <span>Saber mais</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AboutScreen = () => (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-teal-50">
        <div className="h-64 bg-teal-500 relative flex items-center justify-center">
           <img src="https://picsum.photos/seed/wpet-about/1200/400" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" alt="WPet story" />
           <h2 className="relative z-10 text-5xl font-black text-white">Sobre a WPet</h2>
        </div>
        <div className="p-8 md:p-12 space-y-6">
          <p className="text-xl text-teal-700 font-semibold leading-relaxed">
            A WPet nasceu com o propósito de oferecer mais conforto e qualidade de vida para cães e gatos em momentos delicados.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Somos especializados em momentos como o pós-operatório e tratamentos ortopédicos, onde a segurança e o conforto do seu pet são nossa prioridade máxima.
          </p>
          <div className="bg-teal-50 p-6 rounded-2xl border-l-8 border-teal-500">
            <p className="text-teal-900 font-medium italic text-lg">
              "Cada produto é pensado com carinho, segurança e funcionalidade, respeitando as necessidades específicas de cada animal."
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Nossa equipe técnica pesquisa constantemente novos materiais e designs para garantir que a recuperação do seu animal seja a mais tranquila e livre de estresse possível.
          </p>
          
          <div className="pt-8 flex flex-wrap gap-4">
             <div className="bg-gray-50 px-6 py-4 rounded-2xl">
               <span className="block text-2xl font-bold text-teal-600">+10k</span>
               <span className="text-xs text-gray-500 uppercase font-bold">Pets Cuidados</span>
             </div>
             <div className="bg-gray-50 px-6 py-4 rounded-2xl">
               <span className="block text-2xl font-bold text-teal-600">100%</span>
               <span className="text-xs text-gray-500 uppercase font-bold">Dedicado ao Bem-estar</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pb-24 md:pb-12 bg-gray-50">
      <Header />
      
      <main className="animate-fade-in">
        {currentScreen === Screen.HOME && <HomeScreen />}
        {currentScreen === Screen.CATALOG && <CatalogScreen />}
        {currentScreen === Screen.CALCULATOR && <SizeCalculator />}
        {currentScreen === Screen.ABOUT && <AboutScreen />}
      </main>

      <WhatsAppFAB />
      <BottomNav />

      <footer className="hidden md:block py-12 px-6 bg-gray-900 text-white mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-black text-sm italic">W</div>
              <span className="font-extrabold text-xl tracking-tighter">WPET</span>
            </div>
            <p className="text-gray-400 text-sm">Especialista em conforto e cuidado pós-operatório para quem você ama.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-teal-500">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => navigateTo(Screen.HOME)} className="hover:text-white">Início</button></li>
              <li><button onClick={() => navigateTo(Screen.CATALOG)} className="hover:text-white">Produtos</button></li>
              <li><button onClick={() => navigateTo(Screen.CALCULATOR)} className="hover:text-white">Tamanhos</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-teal-500">Contato</h4>
            <p className="text-gray-400 text-sm mb-4">Suporte e Vendas:</p>
            <p className="font-bold text-white text-lg">{WHATSAPP_NUMBER}</p>
            <p className="text-xs text-gray-500 mt-2">Atendimento somente no Brasil</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} WPet - Roupas Pós-Cirúrgicas. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;
