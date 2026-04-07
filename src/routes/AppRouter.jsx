import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ResumeBuilder from "../pages/ResumeBuilder";
import Portfolio from "../pages/Portfolio";
import Login from "../pages/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route path={routes.resume} element={<ResumeBuilder />} />
        <Route path={routes.portfolio} element={<Portfolio />} />
        <Route path={routes.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;