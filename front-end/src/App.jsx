import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Home from "./pages/Home";
import Flashcard from "./pages/Flashcard";
import RootLayout from "./layouts/RootLayout";
import AddDeckForm from "./components/AddDeckForm";
import { useState } from "react";

function App() {
  const [setshowAddDeckForm, setSetshowAddDeckForm] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route
            path="flashcard"
            element={
              <Flashcard setSetshowAddDeckForm={setSetshowAddDeckForm} />
            }
          />
        </Route>
        <Route path="auth" element={<AuthForm />} />
      </>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />;
      {setshowAddDeckForm && (
        <AddDeckForm setSetshowAddDeckForm={setSetshowAddDeckForm} />
      )}
    </>
  );
}

export default App;
