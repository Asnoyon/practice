import React from "react";
import { Route, Routes } from "react-router-dom";
import TopicsPage from "./topics/TopicsPage";
import HomePage from "../page/home";
const Navigate = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics" element={<TopicsPage />} />
      </Routes>
    </div>
  );
};

export default Navigate;
