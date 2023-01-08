import React, { useContext } from 'react'
import PageTile from "../common/PageTile";
import { PagesContext } from "../../App";
function Home() {
  const { pages } = useContext(PagesContext);
  
  return (
    <main>
      <h3>Menu główne</h3>
      <div className="home-tiles">
      {pages.map((p) => (
        <PageTile key={`page-home-${p.name}`} {...p} additionalStyles="page-home-tile" />
      ))}
      </div>
    </main>
  )
}

export default Home