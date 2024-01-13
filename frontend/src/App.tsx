import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.text();
      setMessage(data);
    };
    fetchMessage();
  }, []);

  return (
    <>
      <h1>Front end working</h1>
      <h1>{message}</h1>
    </>
  );
}

export default App;
