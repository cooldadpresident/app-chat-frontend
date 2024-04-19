import useWebSocket, { ReadyState } from "react-use-websocket";
import { SendBox } from "./components/SendBox";
import React, { useState, useCallback, useEffect } from "react";

const Chat = () => {
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://localhost:8400"
  );
  const [messageHistory, setMessageHistory] = useState<Array<MessageEvent>>([]);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  if (readyState !== ReadyState.OPEN) {
    return <div>connecting...</div>;
  }
  return (
    <div>
      <div>{lastMessage?.data}</div>
      <SendBox OnMessageSend={sendMessage} />
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <div key={idx}>{message ? message.data : null}</div>
        ))}
      </ul>
            
    </div>
  );
};
export default Chat;
