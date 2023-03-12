import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import {loader as homeLoader } from './pages/Home';
import {loader as accommodationLoader} from './pages/Accommodation';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ErrorPage from './pages/Error';
import About from './pages/About';
import Accommodation from './pages/Accommodation';

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
      <Route path="/" errorElement={<ErrorPage />}  >
        <Route index element={<Home />} loader={homeLoader} />
        <Route path='about' element={<About />} />
        <Route path='accommodation/:id' element={<Accommodation />} loader={accommodationLoader} />
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

