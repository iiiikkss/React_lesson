import React from "react";
import { useState, useEffect } from "react";
import { Message } from "./Message";
import { RenderMess } from "./RenderMessage";
import { Users } from "./Users";

export const MessageList = () => {

  const [messageList, setMessageList] = useState([]);

    const addMessages = (nextMessage) =>{
        setMessageList((prevMessage) => [... prevMessage, nextMessage]);
    }
    useEffect(() => {
        if (
          messageList.length > 0 &&
          messageList[messageList.length - 1].author === Users.user
        ) {
          const timeout = setTimeout(() => {
            addMessages({
              author: Users.bot,
              text: 'Hi, Ivan',
            });
          }, 1500);
          return () => clearTimeout(timeout);
        }
      }, [messageList]);
    return<>
        <RenderMess messageList={messageList} />
        <Message addMessages={addMessages} />
    </>
}