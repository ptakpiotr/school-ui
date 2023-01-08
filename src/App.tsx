import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBottom from './components/common/NavBottom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Attendance from './components/pages/Attendance';
import Class from './components/pages/Class';
import Grade from './components/pages/Grade';
import Misc from './components/pages/Misc';
import Payment from './components/pages/Payment';
import Schedule from './components/pages/Schedule';
import Subject from './components/pages/Subject';
import Teacher from './components/pages/Teacher';
import Student from './components/pages/Student';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/class" element={<Class />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/student" element={<Student />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/teacher" element={<Teacher />} />
    </Routes>
    <NavBottom />
    </BrowserRouter>
  )
}

export default App