import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SendBox } from "./components/SendBox";
import Chat from "./Chat";

function App() {
  const [count, setCount] = useState(0);
  function OnSent(message: string) {
    console.log(message);
  }

  return (
    <div>
      <Chat />
      <SendBox OnMessageSend={OnSent} />
    </div>
  );
}

export default App;
