import React, { useContext, useState } from "react";
import PageTile from "./PageTile";
import { PagesContext } from "../../App";

/**
 * Komponent - menu nawigacyjne
 * @returns JSX.Element
 */
function NavBottom() {
  const { pages } = useContext(PagesContext);
  return (
    <nav>
      {pages.map((p) => (
        <PageTile key={`page-tile-${p.name}`} {...p} />
      ))}
    </nav>
  );
}

export default NavBottom;
