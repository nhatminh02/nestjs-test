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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="flashcard" element={<Flashcard />} />
      </Route>
      <Route path="auth" element={<AuthForm />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
