import { createBrowserRouter} from "react-router-dom";
import Home from "../../pages/Home";
import Start from "../Start/Start";
import Card from "../Start/Card";
import Card2 from "../Start/Card2";
import Card3 from "../Start/Card3";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path:"/",
                element:<Start></Start>,
                children:[
                    {
                        path:"/",
                        element:<Card></Card>
                    },{
                        path:"/card2",
                        element:<Card2></Card2>
                    },{
                        path:'/card3',
                        element:<Card3></Card3>
                    }
                ]
            }
        ]
    }
])

export default routes;