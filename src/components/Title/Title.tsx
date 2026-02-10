import style from './Title.module.scss'

interface TitleProps {
    text: string 
    Ptext: string
}

export function Title ({ text, Ptext }: TitleProps) {
    return(
    <> 
    <h1 className={style.titleStyle}>{text}</h1>
    <p className={style.pStyle}>{Ptext}</p>
    </>
    )
}