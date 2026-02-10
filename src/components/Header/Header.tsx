import billeder from '../../assets/billeder.jpg'
import style from './Header.module.scss'
import { useLocation } from 'react-router'
import { Title } from '../Title/Title'


export function Header() {

    let heading = `ON THIS DAY`
    let textstring = `What happend on this day - histirical events, deaths and births througout time`
    let location = useLocation()

    console.log(location.pathname);

    if (location.pathname === `/ByDate`) {
        heading = `ON: 22/08`
        textstring = `What happened on this day - Here you can enter a specific date to get only events that happened on this date`
    }

    if (location.pathname === `/Since`) {
        heading = `SINCE: 1947`
        textstring = `What happened on this day - Here you can enter a specific year to get only events for that year`
    }

    return (
        <header>
            <img className={style.old_pictur} src={billeder} alt="old_picturs" />
            <div className={style.heading}>
                <Title text={heading} Ptext={textstring}></Title>
            </div>
        </header>
    )
}