import { Suspense } from "react";
import { BrowserRouter, Navigate } from "react-router-dom"
import { Link,Route,Routes, NavLink} from "react-router-dom"
import { routes } from './routes';
import logo from '../logo.svg'

export const Navigations = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
        <BrowserRouter>
            <div className="main">
                <nav>
                    <img src={logo} alt={'React logo'} />
                    <ul>
                        {routes.map(({to,name})=>(
                            <li key={to}>
                                <NavLink to={to} >{name}</NavLink> 
                            </li>    
                        ))}
                    </ul>
                </nav>
                <Routes>
                    {routes.map(({path,Component}) =>(
                        <Route path={path} element={<Component/>} />
                    ))
                    }
                    <Route path={'/*'} element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
