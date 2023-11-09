import {Outlet } from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import { MainRouter } from './Route/mainRouter'


function App () {
    return(
        <RouterProvider router={MainRouter}/>
    )
}
export default App
