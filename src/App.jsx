// // import { DeleteButton } from "./components/buttons/DeleteButton/DeleteButton";
// import DeleteButton from "./components/buttons/DeleteButton/DeleteButton";
// import TrashButton from "./components/TrashButton/TrashButton";
// import "./App.css";
// import "";

// import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

//   {
//     name: "TrashButton",
//     path: "/my-components/src/components/TrashButton/TrashButton.jsx",
//     element: <TrashButton />,
//   },
// ];

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
//   ...routes,
// ]);

// function Layout() {
//   return (
//     <main className="app">
//       {routes.map((route) => (
//         <Link key={route.path} to={route.path}>
//           {route.name}
//         </Link>
//       ))}
//     </main>
//   );
// }

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import React from "react";
import DeleteButton from "./component/Buttons/DeleteButton/DeleteButton";
import TrashButton from "./component/Buttons/TrashButton/TrashButton";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const routes = [
  {
    name: "Delete-Button",
    path: "/my-components/src/component/Buttons/DeleteButton/DeleteButton.jsx",
    elements: <DeleteButton />,
  },

  {
    name: "TrashButton",
    path: "/buttons/trash-button",
    element: <TrashButton />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  ...routes,
]);

function Layout() {
  return (
    <main className="app">
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </main>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
