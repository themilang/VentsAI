import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import OrderTracking from "./pages/OrderTracking";
import HelpCenter from "./pages/HelpCenter";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ordertracking" element={<OrderTracking />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
