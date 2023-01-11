import React, { useState } from "react";
import { Cabecera } from "./components/Cabecera";
import { Listado } from "./components/Listado";

function App() {
  const [total, setTotal] = useState(0);

  const comprarProducto = () => {
    setTotal(total + 1);
  }

  return (
    <div className="App">
      <Cabecera cantidad={total} />
      <Listado comprarProducto={comprarProducto}/>
    </div>
  );
}

export default App;
