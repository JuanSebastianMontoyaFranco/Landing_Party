import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// Pages
import Landing from "../pages/Landing"
import Preloader from '../components/widgets/Preloader';
import LandingNavbar from "../components/widgets/LandingNavbar"
import LandingSidebar from "../components/widgets/LandingSidebar"

import { Routes as RoutesConfig } from '../routes';

const RouteLanding = ({ element: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      <main>
        <Component {...rest} />
      </main>
    </>
  );
};


export default function AppRoutes() {
  return (
    <Routes>
      <Route path={RoutesConfig.Landing.path} element={<RouteLanding element={Landing} />} />
    </Routes>
  );
}