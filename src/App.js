import React, { Suspense, useEffect } from "react";
import ReactDOM from"react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState,lazy } from "react";
import {createBrowserRouter,RouterProvider,Outlet, useFetcher} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>
   import("./components/Grocery")
)

const Appcontainer = () => { 

    const[listOfRestaurants,setlistOfRestaurants] = useState([]);
    const[filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [userName,setuserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Srija"
        }
        setuserName(data.name);
    },[])
    
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName,setuserName}} >
        <div className="app">
            <Header listOfRestaurants={listOfRestaurants} setlistOfRestaurants={setlistOfRestaurants} filteredRestaurants={filteredRestaurants} setfilteredRestaurants={setfilteredRestaurants}/>
            <Outlet context = {{listOfRestaurants,setlistOfRestaurants,filteredRestaurants,setfilteredRestaurants}}/>       
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path : "/",
        element:<Appcontainer/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },{
                path:"/contact",
                element:<Contact/>
            },{
                path:"/restaurants/:resId",
                element:<ResMenu/>
            },{
                path : "/grocery",
                element:<Suspense fallback={<h1>Loads...</h1>}><Grocery/></Suspense>
            },{
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement :<Error/>
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>)

