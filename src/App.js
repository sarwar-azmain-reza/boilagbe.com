import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashBoardLayout from './Layout/DashBoardLayout';
import Main from './Layout/Main';
import CategorisedProduct from './Pages/CategorisedProduct/CategorisedProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProductTwo from './Pages/Dashboard/Dashboard/Seller/AddProductTwo';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Weblogs from './Pages/Weblogs/Weblogs';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import SellerRout from './PrivateRoute/SellerRout';
import Payment from './Pages/Dashboard/Dashboard/Buyer/Payment';
import NotFound from './Pages/404Page/NotFound';
import AllBuyers from './Pages/Dashboard/Dashboard/Admin/AllBuyers';
import AdminRoute from './PrivateRoute/AdminRoute';
import ReportedItems from './Pages/Dashboard/Dashboard/Admin/ReportedItems';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/weblogs',
          loader: () => fetch('https://boilagbe-com-server.vercel.app/blogs'),
          element: <Weblogs></Weblogs>
        },
        {
          path: '/register',

          element: <Register></Register>
        },
        {
          path: '/login',

          element: <Login></Login>
        },
        {
          path: 'category/:id',
          loader: ({ params }) => fetch(`https://boilagbe-com-server.vercel.app/products/${params.id}`),
          element: <PrivateRoute><CategorisedProduct></CategorisedProduct></PrivateRoute>
        }

      ]
    },
    {
      path: '/dashboard',
      element: <DashBoardLayout></DashBoardLayout>,
      children: [
        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path: '/dashboard/allbuyers',
          element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
        },
        {
          path: '/dashboard/reporteditems',
          element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
        },
        {
          path: '/dashboard/addproduct',
          element: <SellerRout><AddProductTwo></AddProductTwo></SellerRout>
        },
        {
          path: '/dashboard/payment/:id',
          loader: ({ params }) => fetch(`https://boilagbe-com-server.vercel.app/booking/${params.id}`),
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
