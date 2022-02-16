import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [user, SetUser] = useState(data);
  return (
    <main className="">
      <section className="container">
        <h3>{user.length} Birthday Today</h3>
        <List user={user} />
        <button onClick={() => SetUser([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
