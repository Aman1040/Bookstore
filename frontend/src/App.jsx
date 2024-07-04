import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBooks from "./pages/ShowBooks";
import Tools from "./pages/Tools";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/details" element={<Tools />} />
      <Route path="/book/create" element={<CreateBooks />} />
      <Route path="/book/edit/:id" element={<EditBook />} />
      <Route path="/book/delete/:id" element={<DeleteBook />} />
      <Route path="/book/showbook" element={<ShowBooks />} />
    </Routes>
  );
};

export default App;
