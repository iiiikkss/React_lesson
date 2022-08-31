import { useState } from 'react';
import { Message } from './components/Message';
import './index.css';

export const App = () => {
  const [text,  setText] = useState('Message тект')

const handelChangeText = (element) =>{
  setText(element.target.value)
}

  return (
    <div className="App">
        <input className='message' type="text" onChange={handelChangeText} />
        <Message text={text}/>
    </div>
  );
}
