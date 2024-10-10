import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { register } from "swiper/element";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import { router } from "./routes/routes.tsx";

register();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
