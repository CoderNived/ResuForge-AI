import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";


import Dashboard from "../pages/Dashboard";
import ResumeBuilder from "../pages/ResumeBuilder";
import Portfolio from "../pages/Portfolio";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route path={routes.resume} element={<ResumeBuilder />} />
        <Route path={routes.portfolio} element={<Portfolio />} />
        <Route path={routes.login} element={<Login />} />
        <Route path="/app/*" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/main/*" element={<MainLayout><Home /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;