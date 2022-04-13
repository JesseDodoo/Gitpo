import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/search" element={<Pages.Search />}>
          <Route path=":username" element={<Pages.Search />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
