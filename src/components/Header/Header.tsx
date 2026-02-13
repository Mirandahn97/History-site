import billeder from '../../assets/billeder.jpg'
import style from './Header.module.scss'
import { useLocation } from 'react-router'
import { Title } from '../Title/Title'

interface HeaderProps {
    setDate: React.Dispatch<React.SetStateAction<any>>;
    date?: string | null;
    }


export function Header({setDate, date}:HeaderProps) {

    let heading = `ON THIS DAY`
    let textstring = `What happend on this day - histirical events, deaths and births througout time`
    let inputPlaceholder: string | undefined = undefined;
    let showInput = false;
    let location = useLocation()

    if (location.pathname === `/ByDate`) {
        heading = `ON:`
        inputPlaceholder = `22/08`
        textstring = `What happened on this day - Here you can enter a specific date to get only events that happened on this date`
        showInput = true;
    }

    if (location.pathname === `/Since`) {
        heading = `SINCE:`
        inputPlaceholder = `1947`
        textstring = `What happened on this day - Here you can enter a specific year to get only events for that year`
        showInput = false;
    }

    return (
        <header className={style.container}>
            <img className={style.old_pictur} src={billeder} alt="old_picturs" />
            <div className={style.heading}>
                <div className={style.circle1}></div>
                <div className={style.circle2}></div>
                <div className={style.circle3}></div>
                <div className={style.circle4}></div>
                <Title text={heading} Ptext={textstring} inputPlaceholder={inputPlaceholder} setDate={showInput ? setDate : undefined} value={showInput ? (typeof date === 'string' ? date : '') : undefined} />
            </div>
        </header>
    )
}