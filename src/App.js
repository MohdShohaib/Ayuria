import {
  Routes,
  Route,
} from "react-router-dom";
import Ayurja from "./pages/Ayurja";
import Slider from "./components/Slider";
import { useState } from "react";

function App() {

  const [Selected, setSelected] = useState("")

  return (
    <Routes>
      <Route path="/" element={<Ayurja setSelected={setSelected}/>} />
      <Route path="/Detail" element={<Slider Selected={Selected}/>} />
    </Routes>
  );
}
export default App;
