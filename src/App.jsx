import { createBrowserRouter, RouterProvider } from "react-router-dom";


import {
  DashboardLayout,
  HomeLayout,
  SignIn,
  Error,
  Register,
  Reset,
  BookingTypes,
  DatePolls
} from "./Pages";


// This is how we create the routes with createBrowserRouter
// we are creating children routes and making HomeLayout common for all the children routes
// And we use outlet inside the HomeLayout component to show all the childrens inside the HomeLayout
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // If some route is not available then this error page will show up the global routes
    // This page will show when any route is not present
    errorElement: <Error />,
    children: [
      // When we go to the home(/) route then we will get the index element
      // which is the Landing Component
      { index: true, element: <SignIn /> },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "reset",
        element: <Reset />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          // {
          //   index: true,
          //   element: <Header />,
          // },
          {
            path: "booking", index: true,element: <BookingTypes />
          },
          { path: "polls",element: <DatePolls/> },
        ],
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
