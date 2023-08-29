/* importing all pages */

import AnimalGame from "./pages/AnimalGame";
import ColorGame from "./pages/ColorGame";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SpellingGame from "./pages/SpellingGame";

import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (


    <HashRouter>
      <div>


        <Routes>

          <Route path="/" element={<AnimalGame />} />
          <Route path="/colorgame" element={<ColorGame />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spellinggame" element={<SpellingGame />} />


        </Routes> 

      </div>

    </HashRouter>
  );
}

export default App;