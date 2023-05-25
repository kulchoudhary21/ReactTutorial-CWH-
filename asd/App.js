import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Login from "./src/Login";
import ProtectedRoute from "./src/Routes/ProtectedRoute";
import About from "./src/About";
import Home from "./src/Home";
import ProtectRoute from "./src/Routes/ProtectRoute";
import MyContextProvider from "./src/ContextProvider/MyContextProvider";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <ProtectRoute />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);

  return element;
  //   return (
  //     <div>
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/" element={<Login />} />
  //           <Route path="/admin" element={<ProtectedRoute />}>
  //             <Route path="home" element={<Home />} />
  //             <Route path="about" element={<About />} />
  //           </Route>
  //         </Routes>
  //       </BrowserRouter>
  //     </div>
  //   );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <MyContextProvider>
      <App />{" "}
    </MyContextProvider>
  </BrowserRouter>
);
