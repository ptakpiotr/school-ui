import React from "react";
import {
  SiDotnet,
  SiPostgresql,
  SiPyup,
  SiReact,
  SiTypescript,
} from "react-icons/si";
function About() {
  return (
    <main>
      <article>
        <section>
          Projekt zaliczeniowy z przedmiotu Bazy Danych 1. Prosta aplikacja
          prezentująca przykładowy system zarządzania szkołą.
        </section>
        <section>
          Technologie wykorzystane w projekcie:
          <div className="technologies">
            <SiDotnet />
            <SiReact />
            <SiTypescript />
            <SiPostgresql />
          </div>
        </section>
      </article>
    </main>
  );
}

export default About;
