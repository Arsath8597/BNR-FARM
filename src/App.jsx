import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black">
      <h1 className="text-white">Hello world!</h1>
    </div>
  );
}

export default App;
