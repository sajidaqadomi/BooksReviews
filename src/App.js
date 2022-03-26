import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppBar, Footer, HeaderComponent, ScrollToTop } from './components';
import Home from './pages/Home';
import { GlobalStyle, Main } from './styles/GlobalComponents';
import Book from './pages/Book/Book';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <HeaderComponent />
        <Main>
          <Routes>
            <Route exact path='/' element={<Navigate to='/home' />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/book/:id' element={<Book />} />
            <Route path="*" element={<Navigate to='/home' />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
