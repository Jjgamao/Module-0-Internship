import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import 'bootstrap/dist/css/bootstrap.min.css';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/apply" element={<Apply />}/>
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;