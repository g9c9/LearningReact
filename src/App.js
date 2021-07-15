import React, { useState, useEffect } from "react";
import "./App.css";

//https://api.github.com/users/g9c9

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }

  return <div>No User Available</div>;
}

export default App;
