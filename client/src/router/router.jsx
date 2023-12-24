import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Demo from "../pages/demo";
import ErroPage from "../pages/Error";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErroPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
