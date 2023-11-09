import { createBrowserRouter} from 'react-router-dom'
import Register from '../page/Register'

export const MainRouter = createBrowserRouter([
    {
        path:'/',
        element:<Register/>
    }
])