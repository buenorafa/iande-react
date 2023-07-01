"use client";
import NavBar from "./components/NavBar";
import TitleSection from "./components/TitleSection";
import Card from "./components/Card";
import Footer from "./components/Footer";
// import Projects from "./assets/projects.json";
import Link from "./components/Link";
import Contact from "./components/Contact";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Map = dynamic(() => import("./components/Map/"), { ssr: false });

const padding = "py-16 px-12";
const greenBackground =
  "bg-gradient-to-r from-lime-800 via-lime-700 to-lime-700";

export default function Home() {
  /* 
  
  - Nav ✅
  - Waves (Criar um component das ondas)
  - Section ✅
  - Title ✅
  - Cards ✅
  - Map
  - Contact - Mudar a cor do texto dentro dos inputs
  - Footer ✅
  
  */

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const db =
      "https://my-json-server.typicode.com/buenorafa/iande-db/projects";

    fetch(db)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.log("Ocorreu um erro:", error);
      });
  }, []);
  return (
    <>
      <NavBar />
      {/* HOME */}
      <section
        id="home"
        className={`${padding} ${greenBackground} flex justify-center`}
      >
        <div className="flex flex-col md:flex-row items-center justify-around max-w-5xl">
          <div>
            <div className="flex flex-col w-full md:w-4/5 justify-center items-center text-center md:text-left">
              <h1 className="text-white my-4 text-5xl font-bold leading-tight">
                Você pode transformar o mundo!
              </h1>
              <p className="text-neutral-300 leading-normal text-2xl mb-8">
                Conheça pontos de coleta seletiva, projetos sociais e tudo
                relacionado à sustentabilidade na sua região!
              </p>
            </div>
          </div>
          <div className="w-4/5">
            <img className="w-full z-50" src="./Recycling-pana.svg" />
          </div>
        </div>
      </section>
      {/* SOBRE */}
      <section id="sobre" className={`${padding}`}>
        <TitleSection>Quem somos</TitleSection>
        <div className="flex flex-wrap justify-center items-center gap-x-4 max-w-7xl ">
          <div className="w-5/6 sm:w-2/5 p-6 ">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Uma organização que luta pelo amanhã
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Fundada em 2023, somos uma ONG que pretende te auxiliar a
              encontrar locais de coleta dos mais diversos materias, bem como
              ser uma plataforma de destaque para o seu projeto de
              desenvolvimento sustentável.
            </p>
          </div>
          <div className="w-full sm:w-1/3 p-6">
            <img src="Recycling-bro.svg" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row  justify-center items-center gap-x-4 max-w-7xl ">
          <div className="w-full sm:w-1/3 p-6 mx-1">
            <img src="Save the Earth-bro.svg" />
          </div>
          <div className="w-5/6 sm:w-2/5 p-6 ">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Como tudo surgiu
            </h3>
            <p className="text-xl text-gray-600">
              A ONG, organizada pelos discentes Antônio Victor, Pedro Henrique e
              Rafael Bueno, surgiu através de um projeto multidisciplinar do
              IFPB, com disciplinas ministradas pelos professores Alexande
              Fonseca (Ciência, Tecnologia e Meio Ambiente) e Luiz Carlos
              (Linguagens de Script).
            </p>
          </div>
        </div>
      </section>
      <section id="projetos" className={`${padding}`}>
        <TitleSection>Projetos Sociais</TitleSection>
        <div
          className={`flex flex-col flex-wrap sm:flex-row justify-center align-center gap-8 lg:gap-12 ${padding}`}
        >
          {/* Cards gerados dinamicamente */}
          {projects.map((content) => (
            <Card
              id={content.link}
              title={content.title}
              description={content.description}
              href={content.link}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="#">Todos os projetos</Link>
        </div>
      </section>

      <section id="mapa" className={`${padding}`}>
        <TitleSection>Locais de coleta</TitleSection>
        <div id="map" className="flex justify-center align-center pt-12">
          <Map />
        </div>
      </section>
      <section
        id="contato"
        className={`${padding} flex flex-col justify-center align-center`}
      >
        <TitleSection>Contato</TitleSection>
        <Contact />
      </section>
      <Footer />
    </>
  );
}
