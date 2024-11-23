import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes></Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;