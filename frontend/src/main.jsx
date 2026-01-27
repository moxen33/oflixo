import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n";
import("videojs-youtube/dist/Youtube.min.js");
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import "./assets/scss/streamit.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/rtl.scss";
import "animate.css/animate.css";
import "./assets/custom/css/custom.scss"

import "choices.js/public/assets/styles/choices.min.css";

import './assets/vendor/phosphor-icons/Fonts/regular/style.css'
import './assets/vendor/phosphor-icons/Fonts/duotone/style.css'
import './assets/vendor/phosphor-icons/Fonts/fill/style.css'
import './assets/vendor/phosphor-icons/Fonts/bold/style.css'
import './assets/vendor/streamit-font/iconly.css'

//router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// store
import { store } from "./store/index";
import { Provider } from "react-redux";

// index router
import { IndexRouters } from "./router/index";

const router = createBrowserRouter([...IndexRouters], {
  basename: import.meta.env.VITE_URL,
});

// Initialize direction and lang based on stored language
const initLanguage = () => {
  const storedLang = localStorage.getItem('i18nextLng');
  if (storedLang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = storedLang || 'en';
  }
};

initLanguage();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router}></RouterProvider>
      </App>
    </Provider>
  </React.StrictMode>
);
