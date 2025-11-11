import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        // loader: ({ params }) => fetch(`/blogsData.json/${params.id}`),
        loader: async ({ params }) => {
          const res = await fetch("/blogsData.json"); // পুরো JSON file আনো
          const data = await res.json();
          const singleBlog = data.find((blog) => blog.id === Number(params.id)); // id match
          if (!singleBlog)
            throw new Response("Not Found id number is error!!!!!!!", {
              status: 404,
            });
          return singleBlog;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
