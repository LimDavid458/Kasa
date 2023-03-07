import React from 'react';
import ReactDOM from 'react-dom/client';
import {loader as dataLoader } from './controllers/useData';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import ErrorPage from './pages/Error'
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Footer from './components/Footer';
import './sass/index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={
      <>
        <Header />
        <Outlet />
        <Footer/> 
      </>
    }
    >
      <Route path="/"  errorElement={<ErrorPage />} >
        <Route index element={<Home />} loader={dataLoader} />
        <Route path='about' element={<About />} />
        <Route path='accommodation/:id' element={<Accommodation />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
      
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

