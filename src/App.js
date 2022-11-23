import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Weblogs from './Pages/Weblogs/Weblogs';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: ()=> fetch('http://localhost:5000/admin/categories'),
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
