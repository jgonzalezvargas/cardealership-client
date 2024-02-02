import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
<Route exact element={NotFound} />

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/> } />
        <Route path="/login" exact element={<LoginPage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;