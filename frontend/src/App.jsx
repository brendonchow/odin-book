import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setMessage(res.data);
    });
  }, []);

  return (
    <>
      <h1>Front End working</h1>
      <h1>{message}</h1>
    </>
  );
}

export default App;
