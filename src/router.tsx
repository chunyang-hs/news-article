import Create from "./pages/create";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./pages/home";
const basicRoutes=[
  {
    path:"/create",
    element:<Create/>
  },
  {
    path:"/",
    element:<Home/>
  }

]


function Routes() {
  return useRoutes([...basicRoutes]);
}

const routers = (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);

export default routers;