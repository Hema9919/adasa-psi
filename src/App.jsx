import "./App.css";
import Home from "./Pages/HomePage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFoundPage/NotFound";
import AboutUs from "./Pages/AboutUsPage/AboutUs";
import Blog from "./Pages/BlogPage/Blog";
import Layout from "./Components/Layout/Layout";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";

let route = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetails />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
