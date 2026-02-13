import billeder from '../../assets/billeder.jpg'
import style from './Header.module.scss'
import { useLocation } from 'react-router'
import { Title } from '../Title/Title'

interface HeaderProps {
    setDate: React.Dispatch<React.SetStateAction<string>>;
    date?: string | null;
    setYear: React.Dispatch<React.SetStateAction<string>>;
    year?: string | null;
    }


export function Header({setDate, date, year, setYear}:HeaderProps) {

    let heading = `ON THIS DAY`
    let textstring = `What happend on this day - histirical events, deaths and births througout time`
    let inputPlaceholder: string | undefined = undefined;
    let showInput = false;
    let location = useLocation()

    if (location.pathname === `/ByDate`) {
        heading = `ON:`
        inputPlaceholder = `08/22`
        textstring = `What happened on this day - Here you can enter a specific date to get only events that happened on this date`
        showInput = true;
    }

    if (location.pathname === `/Since`) {
        heading = `SINCE:`
        inputPlaceholder = `1947`
        textstring = `What happened on this day - Here you can enter a specific year to get only events for that year`
        showInput = true;
    }

    return (
        <header className={style.container}>
            <img className={style.old_pictur} src={billeder} alt="old_picturs" />
            <div className={style.heading}>
                <div className={style.circle1}></div>
                <div className={style.circle2}></div>
                <div className={style.circle3}></div>
                <div className={style.circle4}></div>
                <Title text={heading} Ptext={textstring} inputPlaceholder={inputPlaceholder} setDate={showInput ? setDate : undefined} setYear={setYear} value={showInput ? (typeof date === 'string' ? date : '') : year} />
            </div>
        </header>
    )
}