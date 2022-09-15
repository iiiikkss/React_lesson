import { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { AUTHOR, Chat, Message, Messages } from './types';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'Misha',
  },
  {
    id: '2',
    name: 'Mark',
  },
];

const defaultMessages: Messages = {
  '1': [{ author: AUTHOR.USER, value: 'hello, world' }],
  '2': [{ author: AUTHOR.BOT, value: 'hello, im bot' }],
};

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessages);

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    });
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  const onDeleteChat = (chatId: string) => {
    setChats(chats.filter((chat) => chat.id !== chatId));
  };

  return (
    <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chats">
        <Route
          index
          element={
            <ChatList
              chats={chats}
              onAddChat={onAddChat}
              onDeleteChat={onDeleteChat}
            />
          }
        />
        <Route
          path=":chatId"
          element={
            <ChatPage
              chats={chats}
              onAddChat={onAddChat}
              messages={messages}
              onAddMessage={onAddMessage}
              onDeleteChat={onDeleteChat}
            />
          }
        />
      </Route>
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
  );
};