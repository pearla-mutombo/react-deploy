import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import ApiKey from "./pages/ApiKey.jsx";
import Posts from "./pages/Posts.jsx";
import Page404 from "./components/Page404.jsx";
import { repoRoot } from "../public/repoRoot.js";
import { RedirectGitHub404 } from "./components/RedirectGitHub404.jsx";

function App() {
  return (
    <BrowserRouter>
    <RedirectGitHub404/>
      <Header />
      <Routes>
        <Route path={repoRoot} element={<Home />} />
        <Route path={repoRoot + "apikey"} element={<ApiKey />} />
        <Route path={repoRoot +  "posts"} element={<Posts/>}/>
        <Route path={repoRoot + "*" } element={<Page404/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
