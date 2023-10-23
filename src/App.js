import { Routes, Route, useRoutes } from "react-router-dom";
import { SidebarData } from "./components/sidebar/SidebarData.jsx";
import Navbar from "./components/sidebar/Navbar.jsx";
import Products from "./content/Products.jsx";
import HomePage from "./content/Home.jsx";
import {
  Reports,
  ReportOne,
  ReportTwo,
  ReportThree,
} from "./content/Reports.jsx";

const App = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    {
      path: "/reports",
      element: <Reports />,
      children: [
        {
          path: "first_report",
          element: <ReportOne />,
        },
        {
          path: "second_report",
          element: <ReportTwo />,
        },
        {
          path: "third_report",
          element: <ReportThree />,
        },
      ],
    },
    {
      path: "/products",
      element: <Products />,
    },
  ]);
  
  return (
    <>
      <Navbar element={element} />
      <Routes>
        {SidebarData.map(({ id, path }) => (
          <Route key={id} path={path} element />
        ))}
      </Routes>
    </>
  );
};

export default App;
