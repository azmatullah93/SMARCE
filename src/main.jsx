import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import NotFound from './components/pages/NotFound.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import SignUpPage from './components/pages/SignUpPage.jsx'
import HomePage from './components/pages/HomePage.jsx'
// import LogIn from './LogIn.jsx'
import LogInAsPage from './components/pages/LogInAsPage.jsx'
import SignUpAsPage from './components/pages/SignUpAsPage.jsx'
import ManufacturerSignUp from './components/forms/ManufacturerSignUp.jsx'
import DistributerSignUp from './components/forms/DistributerSignUp.jsx'
import RetailerSignUp from './components/forms/RetailerSignUp.jsx'
import ManufacturerDashboard from './components/pages/ManufacturerDashboard'
import ManufacturerLogIn from './components/forms/ManufacturerLogIn.jsx'
import RetailerLogIn from './components/forms/RetailerLogIn.jsx'
import DistributerLogIn from './components/forms/DistributerLogIn.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import DistributerDashboard from './components/pages/DistrubuterDashboard.jsx'
import RetailerDashboard from './components/pages/RetailerDashboard.jsx'
import ProductAuthenticity from './components/pages/ProductAuthenticity.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: '/LogInAs',
    element: <LogInAsPage />
  },
  {
    path: '/SignUpAs',
    element: <SignUpAsPage />
  },
  {
    path: '/ManufacturerSignup',
    element: <ManufacturerSignUp />
  },
  {
    path: '/DistributerSignUp',
    element: <DistributerSignUp />
  },
  {
    path: '/RetailerSignUp',
    element: <RetailerSignUp />
  },
  {
    path: '/ManufacturerLogIn',
    element: <ManufacturerLogIn />
  },
  {
    path: '/DistributerLogIn',
    element: <DistributerLogIn />
  },
  {
    path: '/RetailerLogIn',
    element: <RetailerLogIn />
  },
  {
    path: '/ManufacturerDashboard',
    element: <ManufacturerDashboard />
  },
  {
    path: '/DistributerDashboard',
    element: <DistributerDashboard />
  },
  {
    path: '/RetailerDashboard',
    element: <RetailerDashboard />
  },
  {
    path: '/ProductAuthenticity',
    element: <ProductAuthenticity />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
