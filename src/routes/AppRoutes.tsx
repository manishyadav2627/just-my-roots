import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from '../common/components/misc/SplashScreen';

// const BatchSwapPage = React.lazy(() => import('./BatchSwap/BatchSwapPage'));
// const ToolsPage = React.lazy(() => import('./Tools/ToolsPage'));
const Cart = React.lazy(() => import('./cart/Cart'));
const HomePage = React.lazy(() => import('./home/HomePage'));
const SingleProduct = React.lazy(() => import('./product/SingleProduct'));

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<SplashScreen />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/:id"
        element={
          <Suspense fallback={<SplashScreen />}>
            <SingleProduct />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<SplashScreen />}>
            <Cart />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
