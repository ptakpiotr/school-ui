import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AiFillHome,
  AiFillContacts,
  AiFillAccountBook,
  AiOutlineDesktop,
  AiOutlineNumber,
  AiFillTool,
  AiFillCreditCard,
  AiFillSchedule,
  AiOutlineLaptop,
  AiFillBook,
} from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

import NavBottom from "./components/common/NavBottom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Attendance from "./components/pages/Attendance";
import Class from "./components/pages/Class";
import Grade from "./components/pages/Grade";
import Misc from "./components/pages/Misc";
import Payment from "./components/pages/Payment";
import Schedule from "./components/pages/Schedule";
import Subject from "./components/pages/Subject";
import Teacher from "./components/pages/Teacher";
import Student from "./components/pages/Student";
import { IExceptionDetails, IPagesContextData, IPageTile } from "./Types";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProtectedComponent from "./components/common/ProtectedComponent";

export const PagesContext = React.createContext<IPagesContextData>({
  pages: [],
});

export const ExceptionDetailsContext = React.createContext<IExceptionDetails>({
  message: "",
});

/**
 * funkcja stanowiąca główny komponent programu
 * @returns JSX.Element
 */
function App() {
  const [pages, setPages] = useState<IPageTile[]>([
    {
      href: "/",
      icon: <AiFillHome />,
      name: "Home",
      polishName: "Strona domowa",
      locked: false,
    },
    {
      href: "/about",
      icon: <AiFillContacts />,
      name: "About",
      polishName: "O stronie",
      locked: false,
    },
    {
      href: "/attendance",
      icon: <AiFillAccountBook />,
      name: "Attendance",
      polishName: "Frekwencja",
      locked: false,
    },
    {
      href: "/class",
      icon: <AiOutlineDesktop />,
      name: "Class",
      polishName:"Klasa",
      locked: false,
    },
    {
      href: "/grade",
      icon: <AiOutlineNumber />,
      name: "Grade",
      polishName:"Oceny",
      locked: false,
    },
    {
      href: "/misc",
      icon: <AiFillTool />,
      name: "Misc",
      polishName:"Pozostałe",
      locked: false,
    },
    {
      href: "/payment",
      icon: <AiFillCreditCard />,
      name: "Payment",
      polishName:"Płatności",
      locked: false,
    },
    {
      href: "/schedule",
      icon: <AiFillSchedule />,
      name: "Schedule",
      polishName:"Plan zajęć",
      locked: false,
    },
    {
      href: "/student",
      icon: <AiFillBook />,
      name: "Student",
      polishName:"Uczniowie",
      locked: false,
    },
    {
      href: "/subject",
      icon: <AiOutlineLaptop />,
      name: "Subject",
      polishName:"Przedmioty",
      locked: false,
    },
    {
      href: "/teacher",
      icon: <BsPersonCircle />,
      name: "Teacher",
      polishName:"Nauczyciele",
      locked: true,
    },
  ]);

  const [message, setMessage] = useState<string>("");

  return (
    <ExceptionDetailsContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      <PagesContext.Provider
        value={{
          pages,
          setPages
        }}
      >
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
            <Route path="/teacher" element={<ProtectedComponent><Teacher /></ProtectedComponent>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <NavBottom />
        </BrowserRouter>
      </PagesContext.Provider>
    </ExceptionDetailsContext.Provider>
  );
}

export default App;
