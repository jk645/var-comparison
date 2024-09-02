import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from './routes/RootRoute';
import RootError from './routes/RootError';
import HomeRoute, { loader as homeLoader } from './routes/HomeRoute';
import VehicleDetailsRoute, { loader as vehicleDetailsLoader } from './routes/VehicleDetailsRoute';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <RootError />,
    children: [
      {
        path: "",
        element: <HomeRoute />,
        loader: homeLoader,
      },
      {
        path: "vehicles/:id",
        element: <VehicleDetailsRoute />,
        loader: vehicleDetailsLoader,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
