import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import ServicePage from './Pages/ServicePage';
import TeamPage from './Pages/TeamPage';
import TestimonialPage from './Pages/TestimonialPage';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/project' element={<ProjectPage/>}/>
            <Route path='/service' element={<ServicePage/>}/>
            <Route path='/team' element={<TeamPage/>}/>
            <Route path='/testimonial' element={<TestimonialPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;