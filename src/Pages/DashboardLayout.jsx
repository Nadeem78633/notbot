import { Outlet } from "react-router-dom";
import { Header } from "../Components";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "60px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
