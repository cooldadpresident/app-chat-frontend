/*
Necessary dependencies 
useWebSocket and ReadyState which provides WebSocket hook for react 
Sendbox component 
React and its hooks useState etc from react library
*/
import useWebSocket, { ReadyState } from "react-use-websocket";
import { SendBox } from "./components/SendBox";
import React, { useState, useCallback, useEffect } from "react";


// defining the chat component, receives props which includes username
const Chat = (props) => {
  // setting up WebSocket connection using the useWebSocket
  // 
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://localhost:8400"
  );
  let propsUsername = props.username;
  const [messageHistory, setMessageHistory] = useState<Array<MessageEvent>>([]);

  function handleMessage(message) {
    const wholeMessage = { message, propsUsername };
    let wholeMessageJSON = JSON.stringify(wholeMessage);
    sendMessage(wholeMessageJSON);
    console.log(wholeMessageJSON);
    console.log(wholeMessage);
  }

  useEffect(() => {
    if (lastMessage !== null) {
      console.log("received message ", lastMessage.data);
      let lastMessageParsed = JSON.parse(lastMessage.data);
      console.log("Parsed message ", lastMessageParsed);
      console.log(lastMessageParsed.message);
      setMessageHistory((prev) => prev.concat(lastMessageParsed));
    }
  }, [lastMessage]);

  if (readyState !== ReadyState.OPEN) {
    return <div>connecting...</div>;
  }
  return (
    <div>
      <SendBox OnMessageSend={handleMessage} />
      <ul>
        {messageHistory.map((lastMessageParsed, idx) => (
          //lastMessageUsernameMessage = (`${lastMessageParsed.propsUsername} ${lastMessageParsed.message}`);
          <div key={idx}>
            {lastMessageParsed ? (
              <div>
                <div>{lastMessageParsed.propsUsername}</div>
                <div>{lastMessageParsed.message}</div>
              </div>
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Chat;
