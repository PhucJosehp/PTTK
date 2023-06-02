import "./css/App.css";
import { Route, Routes } from "react-router";

import Dashboard from "./screens/Dashboard";
import Checkin from "./screens/Checkin";
import Rooms from "./screens/Rooms";
import Services from "./screens/Services";
import Tours from "./screens/Tours";
import Payment from "./screens/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="/Checkin" element={<Checkin />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
