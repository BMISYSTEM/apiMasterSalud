import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPage, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
        <h1>CargaPerezosa</h1>
        <ul>
            <li>
                <NavLink to={'lazy1'} >Lazy1</NavLink>
            </li>
            <li>
                <NavLink to={'lazy3'} >Lazy1</NavLink>
            </li>
            <li>
                <NavLink to={'lazy2'} >Lazy1</NavLink>
            </li>
        </ul>

        <Routes>
            <Route path='lazy1' element={<LazyPage/>}/>
            <Route path='lazy2' element={<LazyPage2/>}/>
            <Route path='lazy3' element={<LazyPage3/>}/>
            <Route path='*' element={<Navigate to={'lazy1'}/>}/>
        </Routes>
    </div>
  )
}

export default LazyLayout;
