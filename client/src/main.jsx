import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MensPage from './pages/MensPage.jsx';
import WomensPage from './pages/WomensPage.jsx';
import SnowboardsPage from './pages/SnowboardsPage.jsx';
import SplitboardsPage from './pages/SplitboardsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage/>
      }, {
        path: '/mens',
        element: <MensPage />
      }, {
        path: '/womens',
        element: <WomensPage />
      }, {
        path: '/snowboards',
        element: <SnowboardsPage />
      }, {
        path: '/splitboards',
        element: <SplitboardsPage />
      }, {
        path: '/contact',
        element: <ContactPage />
      },
      // {
      //   path: '/profile/:id',
      //   element: <ProfilePage />
      // }, {
      //   path: '/me',
      //   element: <ProfilePage />
      // }, 

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
