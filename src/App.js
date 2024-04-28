import {
  Routes,
  Route,
} from "react-router-dom";
import Ayurja from "./pages/Ayurja";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Ayurja />} />
    </Routes>
  );
}
export default App;
