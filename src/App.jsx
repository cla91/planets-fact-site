import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import PlanetContext from "./context/planetContext";
import data from "./data.json";

export default function App() {
  return (
    <PlanetContext.Provider value={data}>
      <Layout>
        <Outlet />
      </Layout>
    </PlanetContext.Provider>
  );
}
