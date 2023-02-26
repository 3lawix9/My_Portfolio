import About from "Components/About";
import Contact from "Components/Contact";
import Experience from "Components/Experience";
import Navbar from "Components/Nav";
import Projects from "Components/Projects";
import Skills from "Components/Skills";



export default function Home() {
  return (
    <>
    <Navbar />
     <About />
     <Experience/>
     <Skills />
     <Projects />
     <Contact/>
   </>
  )
}
