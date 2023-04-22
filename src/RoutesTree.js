import React from "react";
import { Route, Routes } from "react-router-dom";
import BrainPage2 from "./pages/Brain2";
import CirclePage from "./pages/xcircle"
import MainPage from "./pages/MainPage"

const RoutesTree = () => {
    return (
        <Routes>
            <Route path='/Brain2' title={"Brain Demo2"} element={<BrainPage2 />} />
            <Route path='/circle' element={<CirclePage />} />
            <Route path='/' element={<MainPage />} />
        </Routes>
    );
};
export default RoutesTree;