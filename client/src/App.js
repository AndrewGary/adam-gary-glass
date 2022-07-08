import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WelcomeMessage from './components/WelcomeMessage';
import Login from './components/Login';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import { Routes, Route } from 'react-router-dom'
import AddNewProductForm from './components/AddNewProductForm';
import ShoppingCartPage from './components/ShoppingCartPage';
import CheckIfOfAge from './components/CheckIfOfAge';
import Register from './components/Register';
import FileUploadTest from './components/FileUploadTest';
import Products from './pages/Products/Products';
import ProductDetails from './pages/Products/components/ProductDetails';
import Footer from './components/Footer';
import LandingPage from './pages/Landing Page/LandingPage';

function App() {
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/products' element={<Products />} />
        <Route path='/ageVerification' element={<CheckIfOfAge />} />
        <Route path='/shoppingCart' element={<ShoppingCartPage />} />
        <Route path='/addNewProduct' element={<AddNewProductForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPasswordPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/photoUploadTest' element={<FileUploadTest />} />
      </Routes>
      <Footer />
      {/* <WelcomeMessage /> */}
      {/* <Login /> */}
      {/* <ForgotPasswordPage /> */}
    </div>
  );
}

export default App;
