import React from "react";
import { Route, Routes } from "react-router-dom";
import { Inicio, SocialMedia } from "../school/pages";
import { NaviBar } from "../NavBar/NaviBar";

export const AppRouter = () => {
  return (
    <>
      <NaviBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </div>
    </>
  );
};
