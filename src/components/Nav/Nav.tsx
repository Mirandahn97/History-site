import { NavLink } from "react-router";
import style from './Nav.module.scss'

export function Nav() {


    return(
      <nav className={style.Navigation}>
        <ul>
            <li>
               <NavLink to='/ByDate'>BY DATE</NavLink>
            </li>
            <li>
                <NavLink to='Today'>TODAY</NavLink>
            </li>
            <li>
                <NavLink to='Since'>SINCE</NavLink>
            </li>
        </ul>
      </nav>
    )
}