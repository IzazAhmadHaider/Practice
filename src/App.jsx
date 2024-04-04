import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RangeSlider from './components/RangeSlider';
import RangeSlider1 from './components/RangeSlider1';
import UpdateObject from './components/ObjectUpdataion';
import Apireq from './components/Apireq';
import Cheksvg from './components/Checksvg';
import Home from './components/Home';
import CategoryMenu from './components/catagorieshover';
import MapComponent from './components/Mapedit';
import MapComponent2 from './components/Mapshow';
import Shapefiletogeojson from './components/Shp2geojson';

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
        <Route path="/map2" element={<MapComponent2 />} />
        <Route path="/shp2gj" element={<Shapefiletogeojson />} />
      </Routes>
    </Router>
  );
};

export default App;
