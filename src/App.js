import Header from "./components/Header";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path='/' element={<Header />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
