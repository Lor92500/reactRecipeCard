// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";
import Card from "./components/Card";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Card
          title="La symphonie des saveurs"
          description="Equilibre parfait entre tradition et modernité. Chaque bouchée est une explosion de saveur harmonieuse accompagnée d'une texture croustillante et d'une tendreté irresistible."
          imageUrl="/plat.jpg"
        />
      </div>
    </>
  );
}

export default App
