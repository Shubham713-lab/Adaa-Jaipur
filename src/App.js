import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import SearchResults from './components/pages/SearchResults';
import Login from './components/pages/Login';
import Account from './components/pages/Account';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import ProductPage from './components/pages/ProductPage';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/account" />} />
          <Route path="/account" element={user ? <Account /> : <Navigate to="/login" />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;