import { useState } from "react";

interface SendBoxProps {
  OnMessageSend: (message: string) => void;
}
export const SendBox = ({ OnMessageSend }: SendBoxProps) => {
  const [message, setMessage] = useState("");

  const OnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const OnClick = () => {
    OnMessageSend(message);
  };
  return (
    <div>
      <textarea onChange={OnChange}></textarea>
      <button onClick={OnClick}>SEND</button>
    </div>
  );
};
