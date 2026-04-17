import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import WelcomePage from './pages/welcome-page/welcome-page';
import HomePage from './pages/home-page/home-page';
import Toast from './components/toast/toast';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [toast, setToast] = useState(null);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] text-[#0a0a0a] selection:bg-black selection:text-white relative overflow-x-hidden">
      <Navbar onNavigate={navigate} />
      
      <div className="flex-grow">
        {currentPage === 'landing' ? (
          <WelcomePage onStart={() => navigate('home')} />
        ) : (
          <HomePage onShowToast={showToast} />
        )}
      </div>

      <Footer />

      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
