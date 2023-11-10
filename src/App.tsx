import {Outlet } from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import { MainRouter } from './Route/MainRouter'


function App () {
    return(
        <RouterProvider router={MainRouter}/>
    )
}
export default App
