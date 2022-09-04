export const RenderMess = ({ messageList }) => {
    return (
      <ul>
        {messageList.map((item, index) => (
          <li key={index}>
            {item.author} : {item.text}
          </li>
        ))}
      </ul>
    );
  };
  