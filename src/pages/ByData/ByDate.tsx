import { useEffect, useState } from "react";
import type { EventData } from "../../components/types/eventType";
import style from "./ByDate.module.scss";
import light from "../../assets/light.png";
import arrow from "../../assets/arrow.png";
import book from "../../assets/book.png";

interface ByDateProps {
  date: string | null;
}

export function ByDate({ date }: ByDateProps) {
  const [data, setData] = useState<EventData | null>(null);

  useEffect(() => {
    async function doFetchMount() {
      let fetchUrl = "https://history.muffinlabs.com/date/"+date;

      const res = await fetch(fetchUrl);
      const data = await res.json();
      setData(data);
    }

    doFetchMount();
  }, [date]);

  return (
    <div className={style.timeline}>
      <img src={light} alt="light" />

      {data?.data?.Events?.map((item, index) => (
        <section
          key={index}
          className={`${style.since} ${index % 2 === 0 ? style.right : style.left}`}
        >
          <div className={style.dot}></div>

          <h4>
            <strong>YEAR {item.year}</strong>
          </h4>

          <p>{item.text}</p>

          <div className={style.link}>
            {index % 2 === 0 ? (
              <>
                <a href={item.links[0].link} target="_blank" rel="noreferrer">
                  Read more
                </a>
                <img src={book} alt="book" />
              </>
            ) : (
              <>
                <img src={book} alt="book" />
                <a href={item.links[0].link} target="_blank" rel="noreferrer">
                  Read more
                </a>
              </>
            )}
          </div>
        </section>
      ))}

      <img
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        src={arrow}
        alt="arrow"
      />
    </div>
  );
}
