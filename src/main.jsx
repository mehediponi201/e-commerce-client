import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import CartContext from './CartContext';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
        <Cart></Cart>
      </div>
    </CartContext>
  </StrictMode>
)
