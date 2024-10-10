import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  useEffect(() => {
    window.onbeforeunload = () => true;
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
