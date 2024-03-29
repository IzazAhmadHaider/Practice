import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import RangeSlider from './components/RangeSlider';
import RangeSlider1 from './components/RangeSlider1';
import UpdateObject from './components/ObjectUpdataion';
import Apireq from './components/Apireq';
import Cheksvg from './components/Checksvg';
import Home from './components/Home';
import CategoryMenu from './components/catagorieshover';
import MapComponent from './components/Map';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rangeslider1" element={<RangeSlider1 />} />
        <Route path="/range-slider" element={<RangeSlider />} />
        <Route path="/update-object" element={<UpdateObject />} />
        <Route path="/apireq" element={<Apireq />} />
        <Route path="/checksvg" element={<Cheksvg />} />
        <Route path="/catagories" element={<CategoryMenu />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
