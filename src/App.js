import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashBoardLayout from './Layout/DashBoardLayout';
import Main from './Layout/Main';
import CategorisedProduct from './Pages/CategorisedProduct/CategorisedProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProduct from './Pages/Dashboard/Dashboard/Seller/AddProduct';
import AddProductTwo from './Pages/Dashboard/Dashboard/Seller/AddProductTwo';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Weblogs from './Pages/Weblogs/Weblogs';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: ()=> fetch('https://boilagbe-com-server.vercel.app/admin/categories'),
          element:<Home></Home>
        },
        {
          path:'/weblogs',

          element:<Weblogs></Weblogs>
        },
        {
          path:'/register',

          element:<Register></Register>
        },
        {
          path:'/login',

          element:<Login></Login>
        },
        {
          path:'category/:id',
          element:<PrivateRoute><CategorisedProduct></CategorisedProduct></PrivateRoute>
        }
        
      ]
    },
    {
      path:'/dashboard',
      element:<DashBoardLayout></DashBoardLayout>,
      children:[
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'/dashboard/addproduct',
          element:<AddProductTwo></AddProductTwo>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
