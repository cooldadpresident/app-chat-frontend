import useWebSocket, { ReadyState } from 'react-use-websocket';

const Chat = () => {
    const {sendMessage, lastMessage, readyState} = useWebSocket("ws://localhost:8400",
    );
    if (readyState !== ReadyState.OPEN){
        return <div>connecting...</div>;
        
    }
    return <div>{lastMessage?.data}</div>;
};
export default Chat;
