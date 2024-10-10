import { Outlet } from "react-router-dom";
import Footer from "../ui/shared/Footer";
import Navbar from "../ui/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
