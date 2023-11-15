import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="wrapper">
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
