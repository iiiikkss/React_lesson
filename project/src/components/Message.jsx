import { useState } from 'react';
import { Users } from './Users';
import style from "./style/message.module.css";



export const Message = ({addMessages}) => {

  
    const [text, setText] = useState();
  
    const handleText = (event) => {
      setText(event.target.value);
    };
  
    const handleMessages = () => {
      addMessages({
        author: Users.user,
        text: text,
      });
    };
  
    return (
      <>
        <input className={style.input} type="text" onChange={handleText} />
        <button className={style.button} disabled={!text} onClick={handleMessages}>
          Отправить
        </button>

      </>
    );
  };
