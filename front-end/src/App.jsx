import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/").then((result) => {
      setMessage(result.data);
    });
  });

  return <h1>{message}</h1>;
}

export default App;
