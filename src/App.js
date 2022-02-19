import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Curriculum from './components/curriculum/Curriculum';
import KidsCourses from './components/KidsCourses/KidsCourses';
import IntroCourse from './components/Footer/LangForAdults/IntroCourse';
import Earth from './components/Earth/Earth';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/curriculum' element={<Curriculum />} /> */}
          <Route exact path='/KidsCourses' element={<KidsCourses />} />
          <Route exact path='/IntoCourses' element={<IntroCourse />} />
          <Route exact path='/Earth' element={<Earth />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;