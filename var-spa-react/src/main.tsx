import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from './routes/RootRoute';
import HomeRoute from './routes/HomeRoute';
import VehicleDetailsRoute, { loader as vehicleDetailsLoader } from './routes/VehicleDetailsRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "",
        element: <HomeRoute />,
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
    <RouterProvider router={router} />
  </StrictMode>,
)
