import React, { useState, useEffect } from 'react';
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
import Dashboard from './pages/Dashboard/Dashboard';
import EditProducts from './components/EditProducts';

import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { loginWithRedirect } = useAuth0();
  const { user } = useAuth0();
  const { logout } = useAuth0();

  const [activeUser, setActiveUser ] = useState(user);



  console.log('App user: ', user);
  
  return (
    <div className="App">
      <Navbar loginWithRedirect={loginWithRedirect} logout={logout} user={user}/>

      <Routes>
        <Route path='/editProducts' element={<EditProducts />} />
        <Route path='/dashboard' element={<Dashboard activeUser={activeUser} user={user}/>} />
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
