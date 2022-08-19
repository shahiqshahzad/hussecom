import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './component/Footer';
import Header from './component/Header';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />

          </Routes>

        </Container>

      </main>
      <Footer />

    </Router>


  );
}

export default App;
