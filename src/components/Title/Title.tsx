import style from './Title.module.scss';

interface TitleProps {
  text: string;
  inputPlaceholder: string | undefined;
  Ptext: string;
  setDate?: React.Dispatch<React.SetStateAction<string>>;
  setYear?: React.Dispatch<React.SetStateAction<string>>;
  value?: string | null;
  onEnter?: () => void;  
}

export function Title({ text, inputPlaceholder, Ptext, setDate, setYear, value, onEnter }: TitleProps) {

  const testFunc = (data: string) => {
    if (setDate) setDate(data) 
    if (setYear) setYear(data) 

  };

  return (
    <>
      <div className={style.overskrift}>
        <h1 className={style.titleStyle}>{text}</h1>

        {inputPlaceholder && setDate && (
          <input
            className={style.inputPlaceholder}
            value={value ?? ""}
            onChange={(e) => testFunc(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onEnter?.(); 
              }
            }}
            type="text"
            placeholder={inputPlaceholder}
          />
        )}
      </div>

      <p className={style.pStyle}>{Ptext}</p>
    </>
  );
}