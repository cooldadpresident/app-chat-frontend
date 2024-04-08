import useWebSocket, { ReadyState } from "react-use-websocket";
import { SendBox } from "./components/SendBox";

const Chat = () => {
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://localhost:8400"
  );
  if (readyState !== ReadyState.OPEN) {
    return <div>connecting...</div>;
  }
  return (
    <div>
      <div>{lastMessage?.data}</div>
      <SendBox OnMessageSend={sendMessage} />
    </div>
  );
};
export default Chat;
