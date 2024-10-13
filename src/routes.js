import {
    createBrowserRouter
} from "react-router-dom";
import App from "./components/App";
import Popular from "./components/Popular";
import Toprated from "./components/Toprated";
import Upcoming from "./components/Upcoming";
import Pagenotfound from "./components/Pagenotfound";
import Search from "./components/Search";
import Singlemovie from "./components/Singlemovie";
import Fakestore from "./components/Fakestore";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:"" , element:<Popular />},
        {path:"toprated-movies" , element:<Toprated />},
        {path:"upcoming-movies" , element:<Upcoming />},
        {path:"search-form/:moviename" , element:<Search />},
        {path:"single-movie/:movid" ,element:<Singlemovie />},
        {path:"fakestore" , element:<Fakestore />},
        {path:"*" , element:<Pagenotfound />},
      ]
    },
]);

export default router;