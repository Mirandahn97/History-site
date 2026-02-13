import { useState } from "react";
import { useEffect } from "react";
import type { EventData } from "../../components/types/eventType";
import style from './Today.module.scss'
import light from '../../assets/light.png'
import arrow from '../../assets/arrow.png'
import book from '../../assets/book.png'

export function Today() {
    const [data, setData] = useState<EventData>();
    
    const url = "https://history.muffinlabs.com/date";
    
    
    useEffect(() => {
      async function doFetchMount() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data)
      }
      doFetchMount();
    }, [])
    console.log(data);
    

    return(
       <div className={style.timeline}>
      <img src={light} alt="light" />
      {data?.data?.Events?.map((item, index) => (
    
        <section
          key={index}
          className={`${style.since} ${index % 2 === 0 ? style.right : style.left}`}
        >
          <div className={style.dot}></div>
          <h4>  <strong>YEAR {item.year}</strong> </h4>
          <p>{item.text}</p>
          <div className={style.link}>
            {index % 2 === 0 ? <><a href={item.links[0].link}>Read more</a>
          <img src={book} alt="book" /></> : <><img src={book} alt="book" /> <a href={item.links[0].link}>Read more</a></> }
          
          </div>
        </section>
      ))}
      <img onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} src={arrow} alt="arrow" />
    </div>
  )
}