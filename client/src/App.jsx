import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AddProducts from './pages/addProducts/AddProducts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProducts" element={<AddProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
