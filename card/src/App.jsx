import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="head">Fetch Data React Project</h1>
      <div className="App">
        {data.map((items) => {
          return (
            <div key={items.id} className="card">
              <h1>
                {items.title}
                <p>{items.id}</p>
              </h1>
              <p className="para">{items.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
