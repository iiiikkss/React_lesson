import style from './style/messageList.module.css'

export const RenderMess = ({ messageList }) => {
    return (
      <>
        {messageList.map((item, index) => (
          <div className={style.message} key={index}>
            {item.author} : {item.text}
          </div>
        ))}
      </>
    );
  };
  