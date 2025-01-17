import React from "react";
import {
  Routes, Route, NavLink, BrowserRouter
} from "react-router-dom";
import "./Main.css"
import Koti from "./Koti";
import Tarina from "./Tarina";
import Yhteys from "./Yhteys";
import Kartta from "./Kartta";
import Lomake from "./Lomake";
import Sääkamera from "./Sääkamera";
import Donitsit from "./Donitsit";
import FormComponent from "./Lomake1";
import Wiki from "./Wiki";


function Main() {
      return (
        <BrowserRouter>
          <div>
            <h1>Perus Single Page Application (SPA)</h1>
            <ul className="header">
              <li><NavLink exact to="/">Koti</NavLink></li>
              <li><NavLink to="/tarina">Tarinaa</NavLink></li>
              <li><NavLink to="/yhteys">Yhteys</NavLink></li>
              <li><NavLink to="/kartta">Kartta</NavLink></li>
              <li><NavLink to="/lomake">Lomake 1</NavLink></li>
              <li><NavLink to="/lomake1">Lomake 2</NavLink></li>
              <li><NavLink to="/sääkamera">Sääkamera</NavLink></li>
              <li><NavLink to="/donitsit">Donitsit</NavLink></li>
              <li><NavLink to="/wiki">Wiki search</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Koti />}/>
                    <Route path="/tarina" element={<Tarina />}/>
                    <Route path="/yhteys" element={<Yhteys />}/>
                    <Route path="/kartta" element={<Kartta />}/>
                    <Route path="/lomake" element={<Lomake />}/>
                    <Route path="/lomake1" element={<FormComponent/>}/>
                    <Route path="/sääkamera" element={<Sääkamera />}/>
                    <Route path="/donitsit" element={<Donitsit />}/>
                    <Route path="/wiki" element={<Wiki />}/>
                </Routes>
            </div>
          </div>
        </BrowserRouter>
      );
    }
export default Main;
