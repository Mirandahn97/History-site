import { NavLink } from "react-router";
import style from './Nav.module.scss'
import { useLocation } from "react-router";

export function Nav() {

        let location = useLocation()

        console.log(location);
        

    return(
      <nav className={style.Navigation}>
        <ul>
            <li>
                {/*Conditional rendering:  Det første der sker er en coondition og hvis den er rigtigt så laver den det efter spørgsmålstegnet, og eller laver den det efter ":"*/}
                {location.pathname=="/ByDate" ? <NavLink className={style.active} to='/ByDate'>BY DATE</NavLink> : <NavLink  to='/ByDate'>BY DATE</NavLink>}
            </li>
            <li>
                {location.pathname=="/Today" ? <NavLink className={style.active} to='/Today'>TODAY</NavLink> : <NavLink  to='/Today'>TODAY</NavLink>}
            </li>
            <li>
                {location.pathname=="/Since" ? <NavLink className={style.active} to='/Since'>SINCE</NavLink> : <NavLink  to='/Since'>SINCE</NavLink>}
            </li>
        </ul>
      </nav>
    )
}