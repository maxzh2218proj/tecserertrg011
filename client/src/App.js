import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import ClientsReader from './pages/ClientsReader';
import GoodsReader from './pages/GoodsReader';
import ControlReader from './pages/ControlReader';
import MaterialsReader from './pages/MaterialsReader';

import ClientsEditor from './pages/ClientsEditor';
import GoodsEditor from './pages/GoodsEditor';
import ControlEditor from './pages/ControlEditor';
import MaterialsEditor from './pages/MaterialsEditor';

import ClientsOtk from "./pages/ClientsOtk";
import GoodsOtk from "./pages/GoodsOtk";
import ControlOtk from './pages/ControlOtk';
import MaterialsEditorOtk from './pages/MaterialsEditorOtk';
//import Registration from './pages/Registration';
//import Login from './pages/Login';
import Profile from "./pages/Profile";

import ClientsTester from "./pages/ClientsTester";
import GoodsTester from './pages/GoodsTester';
import ControlTester from './pages/ControlTester';


import Registration from './pages/Registration';
import Login from './pages/Login';

import {AuthContext} from "./helpers/AuthContext"
import { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialsTester from './pages/MaterialsTester';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <div className="navbar">
          {/*<Link to="/createclient">Create Post</Link>*/}
        </div>
        <Routes>
          <Route path="/clients" element={<ClientsReader />} />
          <Route path="/client/:id" element={<GoodsReader />} />
          <Route path="/control/:id" element={<ControlReader />} />
          <Route path="/materials/:id" element={<MaterialsReader />} />

          <Route path="/shdclientsqdt" element={<ClientsEditor />} />
          <Route path="/shdclientqdt/:id" element={<GoodsEditor />} />
          <Route path="/shdcontrolqdt/:id" element={<ControlEditor />} />
          <Route path="/shdmaterialsqdt/:id" element={<MaterialsEditor />} />

          <Route path="/clientsotk" element={<ClientsOtk />} />
          <Route path="/clientotk/:id" element={<GoodsOtk />} />
          <Route path="/controlotk/:id" element={<ControlOtk />} />
          <Route path="/materialseditorotk/:id" element={<MaterialsEditorOtk />} />

          <Route path="/clientstester" element={<ClientsTester />} />
          <Route path="/clienttester/:id" element={<GoodsTester />} />
          <Route path="/controltester/:id" element={<ControlTester />} />
          <Route path="/materialstester/:id" element={<MaterialsTester />} />

          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
