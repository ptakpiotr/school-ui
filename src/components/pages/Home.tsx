import React, { useContext } from "react";
import PageTile from "../common/PageTile";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { PagesContext } from "../../App";
import { IPageTile } from "../../Types";
import { useNavigate } from "react-router-dom";
function Home() {
  const { pages, setPages } = useContext(PagesContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (setPages) {
      setPages((pa: IPageTile[]) => {
        let teacherPage = pa.find((p) => p.name === "Teacher");

        if (teacherPage) {
          teacherPage.locked = true;
          return [...pa.filter((p) => p.name !== "Teacher"), teacherPage];
        } else {
          return [...pa];
        }
      });
    }
    navigate("/");
  };
  return (
    <main className="home-main">
      <header className="home-header">
        {localStorage.getItem("token") ? (
          <button className="danger-btn" onClick={handleLogout}>
            Logout <AiOutlineLogout />
          </button>
        ) : (
          <PageTile
            href="login"
            icon={<AiOutlineLogin />}
            locked={false}
            name="Login"
            additionalStyles="page-home-tile"
          />
        )}
        <h3>Menu główne</h3>
        <PageTile
          href="register"
          icon={<AiOutlineUserAdd />}
          locked={false}
          name="Register"
          additionalStyles="page-home-tile"
        />
      </header>
      <div className="home-tiles">
        {pages.map((p) => (
          <PageTile
            key={`page-home-${p.name}`}
            {...p}
            additionalStyles="page-home-tile"
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
