import { BrowserRouter, Navigate } from "react-router-dom"
import { Link,Route,Routes, NavLink} from "react-router-dom"

import logo from '../logo.svg'
export const Navigations = () => {
  return (
    <BrowserRouter>
        <div className="main">
            <nav>
                <img src={logo} alt={'React logo'} />
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/users"}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="about" element={<h1> About page</h1>} />
                <Route path="users" element={<h1> Users Page</h1>} />
                <Route path="/" element={<h1> Home Page</h1>} />
                <Route path="/*" element={<Navigate to={"/"} replace/>} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
