import "./App.css";
import SearchPage from "../searchPage/SearchPage";
import { Routes, Route } from "react-router-dom";
import BookPage from "../bookPage/BookPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:id" element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
