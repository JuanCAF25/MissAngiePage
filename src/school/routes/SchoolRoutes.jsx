import React from "react";
import { Route, Routes } from "react-router-dom";
import { Inicio } from "../pages";

export const SchoolRoutes = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </div>
    </>
  );
};
