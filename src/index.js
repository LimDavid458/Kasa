import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home, { loader as HomeLoader } from './pages/Home';
import Accommodation, { loader as AccommodationLoader } from './pages/Accommodation';

import Header from './components/Header';
import Footer from './components/Footer';

import ErrorPage from './pages/Error';
import About from './pages/About';

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
      <Route path="/" errorElement={<ErrorPage />} >
        <Route index element={<Home />} loader={HomeLoader} />
        <Route path='about' element={<About />} />
        <Route path='accommodation/:id' element={<Accommodation />} loader={AccommodationLoader} />
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

