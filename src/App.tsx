import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SendBox } from "./components/SendBox";
import Chat from "./Chat";

function App() {
  const [name, setName] = useState("");
  let [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? (
        <div>
          <Chat username={name} />
        </div>
      ) : (
        <div>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <button
            onClick={() => {
              setIsLogged(true);
            }}
          >
            Send name
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <Chat />
    </div>
  );
}

export default App;
