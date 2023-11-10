import { createBrowserRouter} from 'react-router-dom'
import Register from '../page/Register'
import Register1 from '../page/Register1'
import Register3 from '../page/Register3'
import Register4 from '../page/Register4'
import Register5 from '../page/Register5'

export const MainRouter = createBrowserRouter([
    {
        path:'/',
        element:<Register/>
    },
    {
        path:'/register1',
        element:<Register1/>
    },
    {
        path:'/register3',
        element:<Register3/>
    },
    {
        path:'/register4',
        element:<Register4/>
    },
    {
        path:'/register5',
        element:<Register5/>
    }
])