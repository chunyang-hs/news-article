import { Routes, Route } from "react-router-dom";
import Create from "./pages/create";
import Home from "./pages/home";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </LocalizationProvider>
    </div>
  );
}

export default App;
