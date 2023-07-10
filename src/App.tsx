import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [response, setResponse] = useState<string | null>(null);
  async function callApi() {
    try {
      const { data } = await axios.get("/");
      setResponse(data);
    } catch {
      console.error("Error");
    }
  }
  return <div>{response ?? <button onClick={callApi}>Call Api</button>}</div>;
}

export default App;
