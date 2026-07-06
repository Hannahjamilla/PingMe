import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import WelcomePage from './pages/welcome-page/welcome-page';
import HomePage from './pages/home-page/home-page';
import ProjectsPage from './pages/projects-page/projects-page';
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

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <WelcomePage onStart={() => navigate('home')} onViewProjects={() => navigate('projects')} />;
      case 'projects':
        return <ProjectsPage onContact={() => navigate('home')} />;
      case 'home':
        return <HomePage onShowToast={showToast} />;
      default:
        return <WelcomePage onStart={() => navigate('home')} onViewProjects={() => navigate('projects')} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f1bb] text-neutral-900 relative overflow-x-hidden transition-colors duration-500">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
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
