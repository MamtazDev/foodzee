import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { useEffect } from "react";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
    console.log("jkjkj");
  }, [window.location.href]);

  return <RouterProvider router={router} />;
}

export default App;
