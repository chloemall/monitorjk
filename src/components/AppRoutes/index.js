import Private from "../../modules/Private";
import Home from "../../modules/Home";
import { Routes, Route } from "react-router-dom";
import Wallet from "../../modules/Wallet";
import Login from "../../modules/Login";
import Report from "../../modules/Report";
import Overview from "../../modules/Overview";
import BarChart from "../../modules/BarChart";
import FollowersBarChart from "../../modules/FollowersBarChart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="overview" element={<Overview />} />
      <Route path="barchart" element={<BarChart />} />
      <Route path="barchar" element={<FollowersBarChart />} />
      <Route path="private" element={<Private />} />
      <Route path="menu" element={<Home />} />
      <Route path="menu/wallet" element={<Wallet/>} />
      <Route path="/" element={<Login />} />
      <Route path="report" element={<Report />} />
    </Routes>
  );
};

export default AppRoutes;
