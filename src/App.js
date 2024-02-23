import React ,{Suspense, lazy}from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import Cartpage from './components/Cartpage';
import Grocery from './components/Grocery';
import Contact from './components/Contact';
import About from './components/About';
import appStore from './utils/appStore';
appStore


const AppLayout =()=>{
    return(
        <Provider store ={appStore}> 
            <div className='Applayout'>
                <Header/>
                <Outlet/>
            </div>
        </Provider>
    )
};




const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/cartpage",
                element:<Cartpage/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/Grocery",
                element:<Grocery/>
            },
            {
               path:"/About",
               element:<About/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
            
        ],
        //errorElement:<ErrorPage/>
    }
     
]);
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);