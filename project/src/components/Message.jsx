import { useState } from 'react';
import { MessageList } from './MessageList';
import { Users } from './Users';


export const Message = () => {

  
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
        <input className='message' type="text" onChange={handleText} />
        <button disabled={!text} onClick={handleMessages}>
          Отправить
        </button>

      </>
    );
  };
