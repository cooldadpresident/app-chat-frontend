import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SendBox } from "./components/SendBox";

function App() {
  const [count, setCount] = useState(0);
  function OnSent(message:string) {console.log(message)}; 

  return <SendBox OnMessageSend={OnSent}/>
}

export default App;
