import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import Details from "../Pages/Details/Details";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/services',
                element: <ServicesPage/>
            },
            {
                path: '/services/:id',
                element: <Details/>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            
        ]
    }
])

export default Router;