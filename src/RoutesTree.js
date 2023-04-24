import React from "react";
import { Route, Routes } from "react-router-dom";
import BrainPage2 from "./pages/Brain2";
import CsgPage from "./pages/CsgPage";
import CsgHouse from "./pages/CsgHouse";
import CsgHand from "./pages/CsgHand";
import Measure from "./pages/Measure";
import CirclePage from "./pages/xcircle"
import MainPage from "./pages/MainPage"

const RoutesTree = () => {
    return (
        <Routes>
            <Route path='/Brain2' title={"Brain Demo2"} element={<BrainPage2 />} />
            <Route path='/Measure' title={"Brain Demo2"} element={<Measure />} />
            <Route path='/Mycsg' element={<CsgPage />} />
            <Route path='/CsgHouse' element={<CsgHouse />} />
            <Route path='/CsgHand' element={<CsgHand />} />
            <Route path='/circle' element={<CirclePage />} />
            <Route path='/' element={<MainPage />} />
        </Routes>
    );
};
export default RoutesTree;